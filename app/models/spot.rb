class Spot < ActiveRecord::Base

  validates :owner, :location, :lat, :lng, :price,
  :property_type, :guest_limit, :bed_number, :bathroom_number,
  :description, presence: true

  belongs_to :owner,
  class_name: :User,
  foreign_key: :owner_id

  has_many :availabilities

  has_many :bookings


  has_attached_file :image, default_url: "missing_image_house.png", styles: {
    thumb: "350x235#"
  }
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/


  def self.find_by_featured
    featured = []
    featured_all = [Spot.where('featured = ? AND price > 215 AND property_type = ?', true, "full home")
      .limit(7)]
    featured_all << Spot.where('featured = ? AND price < 215 AND property_type = ?', true, "full home")
      .limit(7)
    featured_all << Spot.where('featured = ? AND property_type <> ?', 'true', 'full home')
      .limit(7)
    featured_all.each do |featured_block|
      featured_block.each do |spot|
        featured << spot
      end
    end
    featured
  end


  #TODO is_available?
  def self.get_available_spots(spots, start_date, end_date)
    available_spots = []
    spots.each do |spot|
      available_days = spot.get_availability
      if ((start_date..end_date).to_a - available_days).empty?
        available_spots.push(spot)
      end
    end
    available_spots
  end

  def self.in_bounds(bounds)
    self.where("lat < ?", bounds[:northEast][:lat])
      .where("lat > ?", bounds[:southWest][:lat])
      .where("lng > ?", bounds[:southWest][:lng])
      .where("lng < ?", bounds[:northEast][:lng])
  end


  # TODO remove N+1 query from get_available_spots

  def get_availability
    unbooked_days = []
    availability_blocks = self.availabilities.includes(:bookings)
    availability_blocks.each do |availability_block|
      booked_days = []
      availability_block.bookings.each do |booking|
        booked_days += (booking.start_date..booking.end_date).to_a
      end
      (availability_block.start_date..availability_block.end_date).each do |day|
        unbooked_days.push(day) unless booked_days.include?(day)
      end
    end
    unbooked_days
  end

  def most_recent_booking(user)
    return false if user.nil?
    self.bookings.where("guest_id = ?", user.id).order(:end_date).last || false
  end

  def self.find_hosted(user)
    return [] if user.nil?
    user.spots
  end

  def self.find_by_filters(bounds, start_date, end_date)
    if bounds
      southern_lat = bounds['southWest']['lat']
      northern_lat = bounds['northEast']['lat']
      western_lng = bounds['southWest']['lng']
      eastern_lng = bounds['northEast']['lng']
      spots = Spot.where(
        lat: ((southern_lat.to_f)..(northern_lat.to_f)),
        lng: ((western_lng.to_f)..(eastern_lng.to_f))
      )
    else
      spots = Spot.all
    end
    if start_date == "" || end_date == ""
      return spots
    else
      return Spot.get_available_spots(spots, start_date, end_date)
    end
  end

end
