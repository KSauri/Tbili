# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.destroy_all

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
Spot.create!(owner_id: owner5.id, name: "NYC Cozy Studio", location: "New York",
  lat: 40.7128, lng: 74.0059, price: 100, description: "Lovely little place!",
  guest_limit: 4, property_type: "private room", image: File.open("app/assets/images/barbados.jpg"), featured: true)
Spot.create!(owner_id: owner2.id, name: Faker::Address.street_name + " Apartment", location: "New York",
  lat: 40.7128, lng: 74.0059, price: rand(50..150), description: Faker::Address.street_name + " apartment",
  guest_limit: 4, property_type: "private room", image: File.open("app/assets/images/carribean.jpg"), featured: true)
Spot.create!(owner_id: owner1.id, name: Faker::Address.street_name + " Apartment", location: "New York",
  lat: 40.7128, lng: 74.0059, price: rand(50..150), description: Faker::Address.street_name + " apartment",
  guest_limit: 4, property_type: "private room", image: File.open("app/assets/images/florida-beach.jpg"), featured: true)
Spot.create!(owner_id: owner1.id, name: Faker::Address.street_name + " Apartment", location: "New York",
  lat: 40.7128, lng: 74.0059, price: rand(50..150), description: Faker::Address.street_name + " apartment",
  guest_limit: 4, property_type: "full home", image: File.open("app/assets/images/garden-house.jpg"), featured: true)
Spot.create!(owner_id: owner1.id, name: Faker::Address.street_name + " Apartment", location: "New York",
  lat: 40.7128, lng: 74.0059, price: rand(50..150), description: Faker::Address.street_name + " apartment",
  guest_limit: 4, property_type: "full home", image: File.open("app/assets/images/inside-home.jpg"), featured: true)
Spot.create!(owner_id: owner2.id, name: Faker::Address.street_name + " Apartment", location: "New York",
  lat: 40.7128, lng: 74.0059, price: rand(50..150), description: Faker::Address.street_name + " apartment",
  guest_limit: 6, property_type: "full home", image: File.open("app/assets/images/italy-bike.jpg"), featured: true)
Spot.create!(owner_id: owner2.id, name: Faker::Address.street_name + " Apartment", location: "New York",
  lat: 40.7128, lng: 74.0059, price: rand(50..150), description: Faker::Address.street_name + " home",
  guest_limit: 6, property_type: "full home", image: File.open("app/assets/images/maine-cottage.jpg"), featured: true)
Spot.create!(owner_id: owner2.id, name: Faker::Address.street_name + " Apartment", location: "New York",
  lat: 40.7128, lng: 74.0059, price: rand(50..150), description: Faker::Address.street_name + " home",
  guest_limit: 6, property_type: "full home", image: File.open("app/assets/images/lake-retreat.jpg"), featured: true)
Spot.create!(owner_id: owner3.id, name: Faker::Address.street_name + " Apartment", location: "New York",
  lat: 40.7128, lng: 74.0059, price: rand(50..150), description: Faker::Address.street_name + " home",
  guest_limit: 6, property_type: "full home", image: File.open("app/assets/images/prague.jpg"), featured: true)
Spot.create!(owner_id: owner3.id, name: Faker::Address.street_name + " Home", location: "New York",
  lat: 40.7128, lng: 74.0059, price: rand(50..150), description: Faker::Address.street_name + " home",
  guest_limit: 6, property_type: "full home", image: File.open("app/assets/images/rome.jpg"), featured: true)
Spot.create!(owner_id: owner4.id, name: Faker::Address.street_name + " Home", location: "New York",
  lat: 40.7128, lng: 74.0059, price: rand(50..150), description: Faker::Address.street_name + " home",
  guest_limit: 6, property_type: "full home", image: File.open("app/assets/images/hip-house.jpg"), featured: true)
Spot.create!(owner_id: owner4.id, name: Faker::Address.street_name + " Home", location: "New York",
  lat: 40.7128, lng: 74.0059, price: rand(50..150), description: Faker::Address.street_name + " home",
  guest_limit: 4, property_type: "full home", image: File.open("app/assets/images/fancy-house.jpg"), featured: true)
Spot.create!(owner_id: owner5.id, name: Faker::Address.street_name + " Home", location: "New York",
  lat: 40.7128, lng: 74.0059, price: 300, description: Faker::Address.street_name + " home",
  guest_limit: 4, property_type: "full home", image: File.open("app/assets/images/cozy-spot.jpg"), featured: true)
Spot.create!(owner_id: owner5.id, name: Faker::Address.street_name + " Home", location: "New York",
  lat: 40.7128, lng: 74.0059, price: 350, description: Faker::Address.street_name + " home",
  guest_limit: 4, property_type: "full home", image: File.open("app/assets/images/breakfast.jpg"), featured: true)
Spot.create!(owner_id: owner4.id, name: Faker::Address.street_name + " Home", location: "New York",
  lat: 40.7128, lng: 74.0059, price: 450, description: Faker::Address.street_name + " home",
  guest_limit: 6, property_type: "full home", image: File.open("app/assets/images/italy-venice.jpg"), featured: true)
Spot.create!(owner_id: owner4.id, name: Faker::Address.street_name + " Home", location: "New York",
  lat: 40.7128, lng: 74.0059, price: 399, description: Faker::Address.street_name + " home",
  guest_limit: 4, property_type: "full home", image: File.open("app/assets/images/french-chateau.jpg"), featured: true)
Spot.create!(owner_id: owner5.id, name: Faker::Address.street_name + " Home", location: "New York",
  lat: 40.7128, lng: 74.0059, price: 400, description: Faker::Address.street_name + " home",
  guest_limit: 4, property_type: "full home", image: File.open("app/assets/images/italy-amalfi.jpg"), featured: true)
Spot.create!(owner_id: owner5.id, name: Faker::Address.street_name + " Home", location: "New York",
  lat: 40.7128, lng: 74.0059, price: 330, description: Faker::Address.street_name + " home",
  guest_limit: 4, property_type: "full home", image: File.open("app/assets/images/pretty-house.jpg"), featured: true)
Spot.create!(owner_id: owner5.id, name: Faker::Address.street_name + " Home", location: "New York",
  lat: 40.7128, lng: 74.0059, price: 330, description: Faker::Address.street_name + " home",
  guest_limit: 4, property_type: "private room", image: File.open("app/assets/images/italy-coast.jpg"), featured: true)
Spot.create!(owner_id: owner5.id, name: Faker::Address.street_name + " Home", location: "New York",
  lat: 40.7128, lng: 74.0059, price: 330, description: Faker::Address.street_name + " home",
  guest_limit: 4, property_type: "private room", image: File.open("app/assets/images/coffee.jpg"), featured: true)
