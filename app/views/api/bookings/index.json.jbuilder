

#name, start_date, end_date, guest#, # of stars, location name, spot image
json.array! @bookings do |booking|
  json.id booking.id
  json.name booking.spot.name
  json.start_date booking.start_date
  json.end_date booking.end_date
  json.image booking.spot.image.url(:thumb)
  json.guest_number booking.guest_number
  json.star_count booking.spot_review_star_count
end
