class Api::BookingsController < ApplicationController
  before_action :require_logged_in

  def curr_booking
    debugger
    spot = Spot.find(params[:spot_id]);
    @booking = spot.most_recent_booking(current_user)
  end

  def index
    @bookings = current_user.bookings
  end

  def create
    booking = Booking.new(booking_params)
    booking.guest_id = current_user.id
    if booking.spot.owner_id = current_user.id
      render json: { booking: ["You can't book your own place, nice try tho!"]}, status: 420
    elsif booking.save
      @spot = Spot.find(booking.spot_id)
      render "api/spots/show"
      #TODO change to upcoming trips
    else
      render json: booking.errors, status: 422
    end
  end

  def update
    booking = Booking.find(params[:id])
    if booking.update(booking_params)
      @spot = Spot.find(booking.spot_id)
      render "api/spots/show"
    else
      render json: booking.errors, status: 422
    end
  end

  def destroy
    Booking.find(params[:id]).destroy
    @bookings = Booking.all
    render :index
  end

  private

  def booking_params
    params.require(:booking).permit(:start_date,
      :end_date,
      :spot_id,
      :guest_number,
      :spot_review,
      :spot_review_star_count,
      :availability_id)
  end
end
