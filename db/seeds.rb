# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.destroy_all

User.create!(email: "guest@fakemail.com", f_name: "Guest", password: "password",
  l_name: "Guestington", image_url: "https://image.freepik.com/free-icon/user-image-with-black-background_318-34564.jpg",
  join_date: Date.today, location: "New York",
  description: "")

owner = User.create!(email: "owner@owner.com", f_name: "Malcolm", password: "password",
  l_name: "Jamal Warner", image_url: "https://image.freepik.com/free-icon/user-image-with-black-background_318-34564.jpg",
  join_date: Date.today, location: "New York",
  description: "")


Spot.destroy_all

Spot.create!(owner_id: owner.id, name: "NYC Cozy Studio", featured: false, location: "New York",
  lat: 40.7128, lng: 74.0059, price: 100, description: "Lovely little place!",
  guest_limit: 4, property_type: "private room")
