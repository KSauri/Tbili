class Spot < ActiveRecord::Base

  validates :owner, :location, :lat, :lng, :price,
  :property_type, :guest_limit, :bed_number, :bathroom_number,
  :description, presence: true

  belongs_to :owner,
  class_name: :User,
  foreign_key: :owner_id

  #TODO add other associations


  has_attached_file :image, default_url: "missing_image_house.png"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/


  def self.find_by_featured
    Spot.where('featured = ?', true)
  end

  # def self.find_featured_homes
  #   Spot.where('featured = ? AND property_type = ?', true, "full home")
  # end


  def is_available?(start_date, end_date)
    self.bookings.each do |booking|
      if booking.start_date <= end_date && start_date <= booking.end_date
        return false
      end
    end
    true
  end

  def self.find_by_filters(bounds, max_price, min_price, start_date, end_date)
    if bounds
      southern_lat = bounds['southWest']['lat']
      northern_lat = bounds['northEast']['lat']
      western_lng = bounds['southWest']['lng']
      eastern_lng = bounds['northEast']['lng']

      spots = Spot.where(
        lat: (southern_lat..northern_lat),
        lng: (western_lng..eastern_lng),
        price: (min_price..max_price)
      )
    else
      spots = Spot.all
    end

    if start_date == "" || end_date == ""
      return spots
    else
      return spots.select do |spot|
        spot.is_available?(Date.parse(start_date), Date.parse(end_date))
      end
    end
  end

end
