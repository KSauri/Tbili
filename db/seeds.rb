# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.destroy_all

User.create!(email: "guest@fakemail.com", f_name: "Guest", password: "password",
  l_name: "Guestington", image_url: "", join_date: Date.today, location: "New York",
  description: "")
