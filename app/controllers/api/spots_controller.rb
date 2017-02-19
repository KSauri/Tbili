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
        params[:filters][:max_price],
        params[:filters][:min_price],
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
        params[:filters][:max_price],
        params[:filters][:min_price],
        Date.strptime(params[:filters][:start_date]),
        Date.strptime(params[:filters][:end_date])
        )
    end
  end




  private

  def spot_params
    params.require(:spot).permit(:featured, :filters) #TODO add filters
  end

end
