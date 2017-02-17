# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.destroy_all
#
User.create!(email: "guest@fakemail.com", f_name: "Guest", password: "password",
  l_name: "Guestington",
  join_date: Date.today, location: "New York",
  description: "")

owner1 = User.create!(email: "owner1@owner.com", f_name: "Malcolm", password: "password",
  l_name: "Jamal Warner",
  join_date: Date.today, location: "New York",
  description: "")
owner2 = User.create!(email: "owner2@owner.com", f_name: "Richard", password: "password",
  l_name: "Holmes",
  join_date: Date.today, location: "Prague",
  description: "")
owner3 = User.create!(email: "owner3@owner.com", f_name: "Daniel", password: "password",
  l_name: "Day Lewis",
  join_date: Date.today, location: "Sofia",
  description: "")
owner4 = User.create!(email: "owner4@owner.com", f_name: "Bryn", password: "password",
  l_name: "Mawr",
  join_date: Date.today, location: "Minsk",
  description: "")
owner5 = User.create!(email: "owner5@owner.com", f_name: "Sarah", password: "password",
  l_name: "Lawrence",
  join_date: Date.today, location: "Austin",
  description: "")


Spot.destroy_all
spots = [
spot1 = Spot.create!(owner_id: owner5.id, name: "NYC Cozy Studio", location: "New York",
  lat: 41.54312, lng: 12.29000, price: 100, description: "Lovely little place!",
  guest_limit: 4, property_type: "private room", image: File.open("app/assets/images/barbados.png"), featured: true),
spot2 = Spot.create!(owner_id: owner2.id, name: Faker::Address.street_name + " Apartment", location: "New York",
  lat: 41.53312, lng: 12.31000, price: rand(50..150), description: Faker::Address.street_name + " apartment",
  guest_limit: 4, property_type: "private room", image: File.open("app/assets/images/carribean.png"), featured: true),
spot3 = Spot.create!(owner_id: owner1.id, name: Faker::Address.street_name + " Apartment", location: "New York",
  lat: 41.52912, lng: 12.2888, price: rand(50..150), description: Faker::Address.street_name + " apartment",
  guest_limit: 4, property_type: "private room", image: File.open("app/assets/images/florida-beach.png"), featured: true),
spot4 = Spot.create!(owner_id: owner1.id, name: Faker::Address.street_name + " Apartment", location: "New York",
  lat: 41.53012, lng: 12.27666, price: rand(50..150), description: Faker::Address.street_name + " apartment",
  guest_limit: 4, property_type: "full home", image: File.open("app/assets/images/garden-house.png"), featured: true),
spot5 = Spot.create!(owner_id: owner1.id, name: Faker::Address.street_name + " Apartment", location: "New York",
  lat: 41.54012, lng: 12.28123, price: rand(50..150), description: Faker::Address.street_name + " apartment",
  guest_limit: 4, property_type: "full home", image: File.open("app/assets/images/inside-home.png"), featured: true),
spot6 = Spot.create!(owner_id: owner2.id, name: Faker::Address.street_name + " Apartment", location: "New York",
  lat: 40.7128, lng: 74.0059, price: rand(50..150), description: Faker::Address.street_name + " apartment",
  guest_limit: 6, property_type: "full home", image: File.open("app/assets/images/italy-bike.png"), featured: true),
spot7 = Spot.create!(owner_id: owner2.id, name: Faker::Address.street_name + " Apartment", location: "New York",
  lat: 40.7128, lng: 74.0059, price: rand(50..150), description: Faker::Address.street_name + " home",
  guest_limit: 6, property_type: "full home", image: File.open("app/assets/images/maine-cottage.png"), featured: true),
spot8 = Spot.create!(owner_id: owner2.id, name: Faker::Address.street_name + " Apartment", location: "New York",
  lat: 40.7128, lng: 74.0059, price: rand(50..150), description: Faker::Address.street_name + " home",
  guest_limit: 6, property_type: "full home", image: File.open("app/assets/images/lake-retreat.png"), featured: true),
spot9 = Spot.create!(owner_id: owner3.id, name: Faker::Address.street_name + " Apartment", location: "New York",
  lat: 40.7128, lng: 74.0059, price: rand(50..150), description: Faker::Address.street_name + " home",
  guest_limit: 6, property_type: "full home", image: File.open("app/assets/images/prague.png"), featured: true),
spot10 = Spot.create!(owner_id: owner3.id, name: Faker::Address.street_name + " Home", location: "New York",
  lat: 40.7128, lng: 74.0059, price: rand(50..150), description: Faker::Address.street_name + " home",
  guest_limit: 6, property_type: "full home", image: File.open("app/assets/images/rome.png"), featured: true),
spot11 = Spot.create!(owner_id: owner4.id, name: Faker::Address.street_name + " Home", location: "New York",
  lat: 40.7128, lng: 74.0059, price: rand(50..150), description: Faker::Address.street_name + " home",
  guest_limit: 6, property_type: "full home", image: File.open("app/assets/images/hip-house.png"), featured: true),
spot12 = Spot.create!(owner_id: owner4.id, name: Faker::Address.street_name + " Home", location: "New York",
  lat: 40.7128, lng: 74.0059, price: rand(50..150), description: Faker::Address.street_name + " home",
  guest_limit: 4, property_type: "full home", image: File.open("app/assets/images/fancy-house.png"), featured: true),
spot13 = Spot.create!(owner_id: owner5.id, name: Faker::Address.street_name + " Home", location: "New York",
  lat: 40.7128, lng: 74.0059, price: 300, description: Faker::Address.street_name + " home",
  guest_limit: 4, property_type: "full home", image: File.open("app/assets/images/cozy-spot.png"), featured: true),
spot14 = Spot.create!(owner_id: owner5.id, name: Faker::Address.street_name + " Home", location: "New York",
  lat: 40.7128, lng: 74.0059, price: 350, description: Faker::Address.street_name + " home",
  guest_limit: 4, property_type: "full home", image: File.open("app/assets/images/breakfast.png"), featured: true),
spot15 = Spot.create!(owner_id: owner4.id, name: Faker::Address.street_name + " Home", location: "New York",
  lat: 40.7128, lng: 74.0059, price: 450, description: Faker::Address.street_name + " home",
  guest_limit: 6, property_type: "full home", image: File.open("app/assets/images/italy-venice.png"), featured: true),
spot16 = Spot.create!(owner_id: owner4.id, name: Faker::Address.street_name + " Home", location: "New York",
  lat: 40.7128, lng: 74.0059, price: 399, description: Faker::Address.street_name + " home",
  guest_limit: 4, property_type: "full home", image: File.open("app/assets/images/french-chateau.png"), featured: true),
spot17 = Spot.create!(owner_id: owner5.id, name: Faker::Address.street_name + " Home", location: "New York",
  lat: 40.7128, lng: 74.0059, price: 400, description: Faker::Address.street_name + " home",
  guest_limit: 4, property_type: "full home", image: File.open("app/assets/images/italy-amalfi.png"), featured: true),
spot18 = Spot.create!(owner_id: owner5.id, name: Faker::Address.street_name + " Home", location: "New York",
  lat: 40.7128, lng: 74.0059, price: 330, description: Faker::Address.street_name + " home",
  guest_limit: 4, property_type: "full home", image: File.open("app/assets/images/pretty-house.png"), featured: true),
spot19 = Spot.create!(owner_id: owner5.id, name: Faker::Address.street_name + " Home", location: "New York",
  lat: 40.7128, lng: 74.0059, price: 330, description: Faker::Address.street_name + " home",
  guest_limit: 4, property_type: "private room", image: File.open("app/assets/images/italy-coast.png"), featured: true),
spot20 = Spot.create!(owner_id: owner5.id, name: Faker::Address.street_name + " Home", location: "New York",
  lat: 40.7128, lng: 74.0059, price: 330, description: Faker::Address.street_name + " home",
  guest_limit: 4, property_type: "private room", image: File.open("app/assets/images/coffee.png"), featured: true)
]
# Spot.last.destroy
# spot = Spot.create!(owner_id: owner5.id, name: Faker::Address.street_name + " Home", location: "New York",
#   lat: 40.7128, lng: 74.0059, price: 330, description: Faker::Address.street_name + " home",
#   guest_limit: 4, property_type: "private room", image: File.open("app/assets/images/coffee.png"), featured: true)

Availability.destroy_all
Booking.destroy_all
11.times do |month|
  spots.each do |spot|
    availability = Availability.create!(spot_id: spot.id, start_date: Date.new(2017,month+1,1), end_date: Date.new(2017,month+1,28))
    Booking.create!(guest_id: owner1.id, spot_id: spot.id, start_date: Date.new(2017,month+1,rand(1..3)), end_date: Date.new(2017,month+1,rand(4..6)), availability_id: availability.id)
    Booking.create!(guest_id: owner2.id, spot_id: spot.id, start_date: Date.new(2017,month+1,rand(7..9)), end_date: Date.new(2017,month+1,rand(10..14)), availability_id: availability.id)
    Booking.create!(guest_id: owner3.id, spot_id: spot.id, start_date: Date.new(2017,month+1,rand(16..20)), end_date: Date.new(2017,month+1,rand(21..25)), availability_id: availability.id)
  end
end
