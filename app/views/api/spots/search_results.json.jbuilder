json.array! @spots do |spot|
  json.id spot.id
  json.name spot.name
  json.price spot.price
  json.lat spot.lat
  json.lng spot.lng
  json.bed_number spot.bed_number
  json.property_type spot.property_type
  json.image spot.image.url
end
