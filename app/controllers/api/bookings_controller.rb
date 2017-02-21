class Api::BookingsController < ApplicationController
  before_action :require_logged_in

  def index
    @bookings = current_user.bookings
  end

  def create
    booking = Booking.new(booking_params)
    booking.guest_id = current_user.id
    if booking.save
      @spot = Spot.find(booking.spot_id)
      render "api/spots/show"
      # render "spots/"
      # @bookings = Booking.all
      # render :index

    else
      render json: booking.errors, status: 422
    end
  end

  def update
    booking = Booking.find(params[:id])
    # TODO finish for reviews
  end

  def destroy
    Booking.find(params[:id]).destroy
    @bookings = Booking.all
    render :index
  end

  private

  def booking_params
    params.require(:booking).permit(:start_date, :end_date, :spot_id, :guest_number)
  end
end
