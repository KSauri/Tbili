export function createBooking(booking) {
  return $.ajax ({
    method: "POST",
    url: "api/bookings",
    data: { booking }
  });
}

export function createReview(booking) {
  return $.ajax ({
    method: "PATCH",
    url: `api/bookings/${booking.id}`,
    data: { booking }
  });
}

export function deleteBooking(booking) {
  return $.ajax ({
    method: "DELETE",
    url: `api/bookings/${booking.id}`
  });
}

export function fetchBookings() {
  return $.ajax ({
    method: "GET",
    url: "api/bookings"
  });
}

export function fetchCurrentUserBooking(spotId) {
  return $.ajax ({
    method: "GET",
    url: "api/bookings/curr_booking",
    data: { spot_id: spotId }
  });
}
