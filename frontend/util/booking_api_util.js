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

export function fetchBookings() {
  return $.ajax ({
    method: "GET",
    url: "api/bookings"
  });
}
