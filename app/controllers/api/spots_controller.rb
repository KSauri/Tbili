class Api::SpotsController < ApplicationController

  def show
    @spot = Spot.find(params[:id])
  end

  def index
    if params[:featured]
      @spots = Spot.find_by_featured
    elsif params[:filters][:start_date] == "" && params[:filters][:end_date] != ""
      render(
      json: { spot_errors: ["You need a start date!"] },
      status: 401
      )
    elsif params[:filters][:start_date] == "" && params[:filters][:end_date] == ""
      @spots = Spot.find_by_filters(
        params[:filters][:bounds],
        "",
        ""
        )
    else
      @spots = Spot.find_by_filters(
        params[:filters][:bounds],
        Date.strptime(params[:filters][:start_date]),
        Date.strptime(params[:filters][:end_date])
        )
    end

  end

  def create

    @spot = Spot.new
    @spot.owner_id = current_user.id
    @spot.location = spot_params[:location]
    @spot.name = spot_params[:name]
    @spot.lat = spot_params[:lat]
    @spot.lng = spot_params[:lng]
    @spot.price = spot_params[:price]
    @spot.description = spot_params[:description]
    @spot.guest_limit = spot_params[:guest_limit]
    @spot.bed_number = spot_params[:bed_number]
    @spot.bathroom_number = spot_params[:bathroom_number]
    @spot.property_type = spot_params[:property_type]
    @spot.pets_allowed = spot_params[:pets_allowed]
    @spot.wireless_internet = spot_params[:wireless_internet]
    @spot.kitchen = spot_params[:kitchen]
    @spot.family_friendly = spot_params[:family_friendly]
    @spot.monthly_discount = spot_params[:monthly_discount]
    @spot.weekly_discount = spot_params[:weekly_discount]
    @spot.minimum_stay = spot_params[:minimum_stay]
    @spot.image = spot_params[:image]

    if @spot.save!
      render :show
    else
      render json: @spot.errors, status: 420
    end
  end

  private

  def spot_params
    params.require(:spot).permit(:featured, :filters, :image, :location,
      :lng, :lat, :price, :description,
      :guest_limit, :bed_number, :bathroom_number,
      :property_type, :pets_allowed, :wireless_internet,
      :kitchen, :family_friendly, :monthly_discount,
      :weekly_discount, :cancellation_policy,
      :minimum_stay, :name)
  end

end
