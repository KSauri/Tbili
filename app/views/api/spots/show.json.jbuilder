json.extract! @spot,
  :id,
  :name,
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
owner = @spot.owner
json.host_f_name owner.f_name
json.host_image owner.avatar
json.host_id owner.id
json.image @spot.image.url
#
json.available_days @spot.get_availability


json.reviews_info @spot.bookings.includes(:guest) do |booking|
  json.guest_f_name booking.guest.f_name
  json.guest_l_name booking.guest.l_name
  json.guest_avatar booking.guest.avatar.url
  json.spot_review booking.spot_review
  json.spot_review_star_count booking.spot_review_star_count
  json.end_date booking.end_date
end
