class Api::BookingsController < ApplicationController
  before_action :require_logged_in, only: [:create, :update, :destroy]

  def curr_booking
    spot = Spot.find(params[:spot_id])
    @booking = spot.most_recent_booking(current_user)
  end

  def index
    debugger
    @bookings = current_user.bookings.includes(:spot, :host)
  end

  def create
    booking = Booking.new(booking_params)
    booking.guest_id = current_user.id
    if booking.spot.owner_id == current_user.id
      render json: { booking: ["You can't book your own place, nice try tho!"]}, status: 422
    else
      if booking.spot_available?
        booking.availability_id = booking.get_availability_id
        if booking.save
          @spot = Spot.find(booking.spot_id)
          render "api/spots/show"
          #TODO change to upcoming trips
        else
          render json: booking.errors, status: 422
        end
      else
        render(
        json: { booking: ["Spot unavailable for those dates"] },
        status: 420
        )
      end
    end
  end

  def update
    booking = Booking.find(booking_params[:booking_id])
    if booking.update(spot_review: booking_params[:spot_review],
      spot_review_star_count: booking_params[:spot_review_star_count])

      @spot = Spot.find(booking.spot_id)
      render "api/spots/show"
    else
      render json: booking.errors, status: 422
    end
  end

  def destroy
    Booking.find(params[:id]).destroy
    @bookings = current_user.bookings.includes(:spot, :host)
    render :index
  end

  private

  def booking_params
    params.require(:booking).permit(:start_date,
      :booking_id,
      :end_date,
      :spot_id,
      :guest_number,
      :spot_review,
      :spot_review_star_count,
      :availability_id)
  end
end
