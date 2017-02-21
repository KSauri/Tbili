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
  lat: 42.00431, lng: 12.3555, price: 100, description: "Lovely little place!",
  guest_limit: 4, property_type: "private room", image: File.open("app/assets/images/barbados.png"), featured: true),
spot2 = Spot.create!(owner_id: owner2.id, name: Faker::Address.street_name + " Apartment", location: "New York",
  lat: 41.99999, lng: 12.37000, price: rand(50..150), description: Faker::Address.street_name + " apartment",
  guest_limit: 4, property_type: "private room", image: File.open("app/assets/images/carribean.png"), featured: true),
spot3 = Spot.create!(owner_id: owner1.id, name: Faker::Address.street_name + " Apartment", location: "New York",
  lat: 41.99000, lng: 12.50000, price: rand(50..150), description: Faker::Address.street_name + " apartment",
  guest_limit: 4, property_type: "private room", image: File.open("app/assets/images/florida-beach.png"), featured: true),
spot4 = Spot.create!(owner_id: owner1.id, name: Faker::Address.street_name + " Apartment", location: "New York",
  lat: 41.85678, lng: 12.68686, price: rand(50..150), description: Faker::Address.street_name + " apartment",
  guest_limit: 4, property_type: "full home", image: File.open("app/assets/images/garden-house.png"), featured: true),
spot5 = Spot.create!(owner_id: owner1.id, name: Faker::Address.street_name + " Apartment", location: "New York",
  lat: 41.83451, lng: 12.35681, price: rand(50..150), description: Faker::Address.street_name + " apartment",
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


reviews = ["Call me Ishmael. Some years ago--never mind how long precisely--having
little or no money in my purse, and nothing particular to interest me on
shore, I thought I would sail about a little and see the watery part of
the world. It is a way I have of driving off the spleen and regulating
the circulation.","But here is an artist. He desires to paint you the dreamiest, shadiest,
quietest, most enchanting bit of romantic landscape in all the valley of
the Saco. What is the chief element he employs? There stand his trees,
each with a hollow trunk, as if a hermit and a crucifix were within; and
here sleeps his meadow, and there sleep his cattle; and up from yonder
cottage goes a sleepy smoke. Deep into distant woodlands winds a
mazy way, reaching to overlapping spurs of mountains bathed in their
hill-side blue.", "Now, when I say that I am in the habit of going to sea whenever I begin
to grow hazy about the eyes, and begin to be over conscious of my lungs,
I do not mean to have it inferred that I ever go to sea as a passenger.
For to go as a passenger you must needs have a purse, and a purse is
but a rag unless you have something in it.", "Do you think the archangel
Gabriel thinks anything the less of me, because I promptly and
respectfully obey that old hunks in that particular instance? Who ain't
a slave? Tell me that.", "As most young candidates for the pains and penalties of whaling stop at
this same New Bedford, thence to embark on their voyage, it may as well
be related that I, for one, had no idea of so doing. For my mind was
made up to sail in no other than a Nantucket craft, because there was a
fine, boisterous something about everything connected with that famous
old island, which amazingly pleased me.", "But no more of this blubbering now, we are going a-whaling, and there is
plenty of that yet to come. Let us scrape the ice from our frosted feet,
and see what sort of a place this 'Spouter' may be.", "But what most puzzled and confounded you was a long, limber, portentous,
black mass of something hovering in the centre of the picture over three
blue, dim, perpendicular lines floating in a nameless yeast. A boggy,
soggy, squitchy picture truly, enough to drive a nervous man distracted.
Yet was there a sort of indefinite, half-attained, unimaginable
sublimity about it that fairly froze you to it, till you involuntarily
took an oath with yourself to find out what that marvellous painting
meant.", "In fact, the artist's design seemed this: a final theory of my own,
partly based upon the aggregated opinions of many aged persons with whom
I conversed upon the subject.", "Whenever I find myself growing grim about the mouth;
whenever it is a damp, drizzly November in my soul; whenever I find
myself involuntarily pausing before coffin warehouses, and bringing up
the rear of every funeral I meet; and especially whenever my hypos get
such an upper hand of me, that it requires a strong moral principle to
prevent me from deliberately stepping into the street, and methodically
knocking people's hats off--then, I account it high time to get to sea
as soon as I can. This is my substitute for pistol and ball. With a
philosophical flourish Cato throws himself upon his sword; I quietly
take to the ship.", "Besides, passengers get
sea-sick--grow quarrelsome--don't sleep of nights--do not enjoy
themselves much, as a general thing;--no, I never go as a passenger;
nor, though I am something of a salt, do I ever go to sea as a
Commodore, or a Captain, or a Cook.", "What of it, if some old hunks of a sea-captain orders me to get a broom
and sweep down the decks? What does that indignity amount to, weighed,
I mean, in the scales of the New Testament?", "It's the breaking-up of the icebound stream
of Time. But at last all these fancies yielded to that one portentous
something in the picture's midst.", "The opposite wall of this entry was hung all over with a heathenish
array of monstrous clubs and spears. Some were thickly set with
glittering teeth resembling ivory saws; others were tufted with knots of
human hair; and one was sickle-shaped, with a vast handle sweeping round
like the segment made in the new-mown grass by a long-armed mower."]







Availability.destroy_all
Booking.destroy_all
11.times do |month|
  spots.each do |spot|
    availability = Availability.create!(spot_id: spot.id, start_date: Date.new(2017,month+1,1), end_date: Date.new(2017,month+1,28))
    Booking.create!(guest_id: owner1.id, spot_id: spot.id,
    start_date: Date.new(2017,month+1,rand(1..3)),
    end_date: Date.new(2017,month+1,rand(4..6)),
    availability_id: availability.id,
    spot_review: reviews[rand(0..reviews.length)])
  end
end


# Booking.create!(guest_id: owner2.id, spot_id: spot.id, start_date: Date.new(2017,month+1,rand(7..9)), end_date: Date.new(2017,month+1,rand(10..14)), availability_id: availability.id)
# Booking.create!(guest_id: owner3.id, spot_id: spot.id, start_date: Date.new(2017,month+1,rand(16..20)), end_date: Date.new(2017,month+1,rand(21..25)), availability_id: availability.id)
