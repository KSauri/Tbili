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
    elsif Date.strptime(params[:filters][:start_date]) < Date.today || Date.strptime(params[:filters][:end_date]) < Date.today
      render(
      json: { spot_errors: ["Sorry but we don't have a time machine!"] },
      status: 401
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
    debugger
    @spot = current_user.spots.new(spot_params)
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
