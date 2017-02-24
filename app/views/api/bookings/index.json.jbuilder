

#name, start_date, end_date, guest#, # of stars, location name, spot image
json.array! @bookings do |booking|
  json.id booking.id
  json.spot_id booking.spot_id
  json.name booking.spot.name
  json.host_name booking.spot.owner.f_name
  json.start_date booking.start_date
  json.host_img booking.spot.owner.avatar.url(:small)
  json.end_date booking.end_date
  json.image booking.spot.image.url(:thumb)
  json.guest_number booking.guest_number
  json.star_count booking.spot_review_star_count
end
