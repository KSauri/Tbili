export function createBooking(booking) {
  return $.ajax ({
    method: "POST",
    url: "api/bookings",
    data: { booking }
  });
}

export function createReview(review) {
  return $.ajax ({
    method: "PATCH",
    url: "api/bookings",
    data: { review }
  });
}

export function fetchBookings() {
  return $.ajax ({
    method: "GET",
    url: "api/bookings"
  });
}
