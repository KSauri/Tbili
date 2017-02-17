class Api::SpotsController < ApplicationController

  def show
    @spot = Spot.find(params[:id])
  end

  def index
    if params[:featured]
      @spots = Spot.find_by_featured
    else
      @spots = Spot.find_by_filters(
        params[:filters][:bounds],
        params[:filters][:max_price],
        params[:filters][:min_price],
        params[:filters][:start_date],
        params[:filters][:end_date]
        )
    end
  end


  private

  def spot_params
    params.require(:spot).permit(:featured, :filters) #TODO add filters
  end

end
