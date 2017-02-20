json.extract! @spot,
  :location,
  :lng,
  :lat,
  :price,
  :description,
  :guest_limit,
  :bed_number,
  :bathroom_number,
  :property_type,
  :pets_allowed,
  :wireless_internet,
  :kitchen,
  :family_friendly,
  :monthly_discount,
  :weekly_discount,
  :cancellation_policy,
  :minimum_stay

#
json.host @spot.owner
json.image @spot.image.url
#
json.available_days @spot.get_availability


json.bookings_info @spot.bookings do |booking|
  json.guest_f_name booking.guest.f_name
  json.guest_l_name booking.guest.l_name
  json.guest_avatar booking.guest.avatar.url
  json.spot_review booking.spot_review
  json.spot_review_star_count booking.spot_review_star_count
end
