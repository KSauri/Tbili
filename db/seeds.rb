# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.destroy_all
#
guest = User.create!(email: "guest@fakemail.com", f_name: "Guest", password: "password",
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

user_ids = [guest.id, owner1.id, owner2.id, owner3.id, owner4.id, owner5.id]

Spot.destroy_all
# spots = [
# spot1 = Spot.create!(owner_id: owner5.id, name: "NYC Cozy Studio", location: "New York",
#   lat: 42.00431, lng: 12.3555, price: 100, description: "Lovely little place!",
#   guest_limit: 4, property_type: "private room", image: File.open("app/assets/images/barbados.png"), featured: true),
# spot2 = Spot.create!(owner_id: owner2.id, name: Faker::Address.street_name + " Apartment", location: "New York",
#   lat: 41.99999, lng: 12.37000, price: rand(50..150), description: Faker::Address.street_name + " apartment",
#   guest_limit: 4, property_type: "private room", image: File.open("app/assets/images/carribean.png"), featured: true),
# spot3 = Spot.create!(owner_id: owner1.id, name: Faker::Address.street_name + " Apartment", location: "New York",
#   lat: 41.99000, lng: 12.50000, price: rand(50..150), description: Faker::Address.street_name + " apartment",
#   guest_limit: 4, property_type: "private room", image: File.open("app/assets/images/florida-beach.png"), featured: true),
# spot4 = Spot.create!(owner_id: owner1.id, name: Faker::Address.street_name + " Apartment", location: "New York",
#   lat: 41.85678, lng: 12.68686, price: rand(50..150), description: Faker::Address.street_name + " apartment",
#   guest_limit: 4, property_type: "full home", image: File.open("app/assets/images/garden-house.png"), featured: true),
# spot5 = Spot.create!(owner_id: owner1.id, name: Faker::Address.street_name + " Apartment", location: "New York",
#   lat: 41.83451, lng: 12.35681, price: rand(50..150), description: Faker::Address.street_name + " apartment",
#   guest_limit: 4, property_type: "full home", image: File.open("app/assets/images/inside-home.png"), featured: true),
# spot6 = Spot.create!(owner_id: owner2.id, name: Faker::Address.street_name + " Apartment", location: "New York",
#   lat: 40.7128, lng: 74.0059, price: rand(50..150), description: Faker::Address.street_name + " apartment",
#   guest_limit: 6, property_type: "full home", image: File.open("app/assets/images/italy-bike.png"), featured: true),
# spot7 = Spot.create!(owner_id: owner2.id, name: Faker::Address.street_name + " Apartment", location: "New York",
#   lat: 40.7128, lng: 74.0059, price: rand(50..150), description: Faker::Address.street_name + " home",
#   guest_limit: 6, property_type: "full home", image: File.open("app/assets/images/maine-cottage.png"), featured: true),
# spot8 = Spot.create!(owner_id: owner2.id, name: Faker::Address.street_name + " Apartment", location: "New York",
#   lat: 40.7128, lng: 74.0059, price: rand(50..150), description: Faker::Address.street_name + " home",
#   guest_limit: 6, property_type: "full home", image: File.open("app/assets/images/lake-retreat.png"), featured: true),
# spot9 = Spot.create!(owner_id: owner3.id, name: Faker::Address.street_name + " Apartment", location: "New York",
#   lat: 40.7128, lng: 74.0059, price: rand(50..150), description: Faker::Address.street_name + " home",
#   guest_limit: 6, property_type: "full home", image: File.open("app/assets/images/prague.png"), featured: true),
# spot10 = Spot.create!(owner_id: owner3.id, name: Faker::Address.street_name + " Home", location: "New York",
#   lat: 40.7128, lng: 74.0059, price: rand(50..150), description: Faker::Address.street_name + " home",
#   guest_limit: 6, property_type: "full home", image: File.open("app/assets/images/rome.png"), featured: true),
# spot11 = Spot.create!(owner_id: owner4.id, name: Faker::Address.street_name + " Home", location: "New York",
#   lat: 40.7128, lng: 74.0059, price: rand(50..150), description: Faker::Address.street_name + " home",
#   guest_limit: 6, property_type: "full home", image: File.open("app/assets/images/hip-house.png"), featured: true),
# spot12 = Spot.create!(owner_id: owner4.id, name: Faker::Address.street_name + " Home", location: "New York",
#   lat: 40.7128, lng: 74.0059, price: rand(50..150), description: Faker::Address.street_name + " home",
#   guest_limit: 4, property_type: "full home", image: File.open("app/assets/images/fancy-house.png"), featured: true),
# spot13 = Spot.create!(owner_id: owner5.id, name: Faker::Address.street_name + " Home", location: "New York",
#   lat: 40.7128, lng: 74.0059, price: 300, description: Faker::Address.street_name + " home",
#   guest_limit: 4, property_type: "full home", image: File.open("app/assets/images/cozy-spot.png"), featured: true),
# spot14 = Spot.create!(owner_id: owner5.id, name: Faker::Address.street_name + " Home", location: "New York",
#   lat: 40.7128, lng: 74.0059, price: 350, description: Faker::Address.street_name + " home",
#   guest_limit: 4, property_type: "full home", image: File.open("app/assets/images/breakfast.png"), featured: true),
# spot15 = Spot.create!(owner_id: owner4.id, name: Faker::Address.street_name + " Home", location: "New York",
#   lat: 40.7128, lng: 74.0059, price: 450, description: Faker::Address.street_name + " home",
#   guest_limit: 6, property_type: "full home", image: File.open("app/assets/images/italy-venice.png"), featured: true),
# spot16 = Spot.create!(owner_id: owner4.id, name: Faker::Address.street_name + " Home", location: "New York",
#   lat: 40.7128, lng: 74.0059, price: 399, description: Faker::Address.street_name + " home",
#   guest_limit: 4, property_type: "full home", image: File.open("app/assets/images/french-chateau.png"), featured: true),
# spot17 = Spot.create!(owner_id: owner5.id, name: Faker::Address.street_name + " Home", location: "New York",
#   lat: 40.7128, lng: 74.0059, price: 400, description: Faker::Address.street_name + " home",
#   guest_limit: 4, property_type: "full home", image: File.open("app/assets/images/italy-amalfi.png"), featured: true),
# spot18 = Spot.create!(owner_id: owner5.id, name: Faker::Address.street_name + " Home", location: "New York",
#   lat: 40.7128, lng: 74.0059, price: 330, description: Faker::Address.street_name + " home",
#   guest_limit: 4, property_type: "full home", image: File.open("app/assets/images/pretty-house.png"), featured: true),
# spot19 = Spot.create!(owner_id: owner5.id, name: Faker::Address.street_name + " Home", location: "New York",
#   lat: 40.7128, lng: 74.0059, price: 330, description: Faker::Address.street_name + " home",
#   guest_limit: 4, property_type: "private room", image: File.open("app/assets/images/italy-coast.png"), featured: true),
# spot20 = Spot.create!(owner_id: 5, name: "Home", location: "New York",
#   lat: 40.7128, lng: 74.0059, price: 330, description: " home",
#   guest_limit: 4, property_type: "private room", image: open("https://www.dropbox.com/s/h86o6t8gzwtojv3/ales-krivec-18049.jpg?dl=1"), featured: true)
# ]

descriptions = ["Stephen, an elbow rested on the jagged granite, leaned his palm against his brow and gazed at the fraying edge of his shiny black coat-sleeve. Pain, that was not yet the pain of love, fretted his heart. Silently, in a dream she had come to him after her death, her wasted body within its loose brown graveclothes giving off an odour of wax and rosewood, her breath, that had bent upon him, mute, reproachful, a faint odour of wetted ashes.",
"And what is death, he asked, your mother's or yours or my own? You saw only your mother die. I see them pop off every day in the Mater and Richmond and cut up into tripes in the dissectingroom. It's a beastly thing and nothing else. It simply doesn't matter. You wouldn't kneel down to pray for your mother on her deathbed when she asked you. Why? Because you have the cursed jesuit strain in you, only it's injected the wrong way. ",
"The key scraped round harshly twice and, when the heavy door had been set ajar, welcome light and bright air entered. Haines stood at the doorway, looking out. Stephen haled his upended valise to the table and sat down to wait. Buck Mulligan tossed the fry on to the dish beside him. Then he carried the dish and a large teapot over to the table, set them down heavily and sighed with relief.",
"The proud potent titles clanged over Stephen's memory the triumph of their brazen bells: et unam sanctam catholicam et apostolicam ecclesiam: the slow growth and change of rite and dogma like his own rare thoughts, a chemistry of stars. Symbol of the apostles in the mass for pope Marcellus, the voices blended, singing alone loud in affirmation: and behind their chant the vigilant angel of the church militant disarmed and menaced her heresiarchs. A horde of heresies fleeing with mitres awry: Photius and the brood of mockers of whom Mulligan was one",
"Ugly and futile: lean neck and tangled hair and a stain of ink, a snail's bed. Yet someone had loved him, borne him in her arms and in her heart. But for her the race of the world would have trampled him underfoot, a squashed boneless snail. She had loved his weak watery blood drained from her own. Was that then real? The only true thing in life? His mother's prostrate body the fiery Columbanus in holy zeal bestrode. She was no more: the trembling skeleton of a twig burnt in the fire, an odour of rosewood and wetted ashes. She had saved him from being trampled underfoot and had gone, scarcely having been. ",
"A gruff squire on horseback with shiny topboots. Soft day, sir John! Soft day, your honour!... Day!... Day!... Two topboots jog dangling on to Dublin. Lal the ral the ra. Lal the ral the raddy.",
"He went out by the open porch and down the gravel path under the trees, hearing the cries of voices and crack of sticks from the playfield. The lions couchant on the pillars as he passed out through the gate: toothless terrors. Still I will help him in his fight. Mulligan will dub me a new name: the bullockbefriending bard.",
"He listened to her licking lap. Ham and eggs, no. No good eggs with this drouth. Want pure fresh water. Thursday: not a good day either for a mutton kidney at Buckley's. Fried with butter, a shake of pepper. Better a pork kidney at Dlugacz's. While the kettle is boiling. She lapped slower, then licking the saucer clean. ",
"On the boil sure enough: a plume of steam from the spout. He scalded and rinsed out the teapot and put in four full spoons of tea, tilting the kettle then to let the water flow in. Having set it to draw he took off the kettle, crushed the pan flat on the live coals and watched the lump of butter slide and melt. While he unwrapped the kidney the cat mewed hungrily against him. Give her too much meat she won't mouse. Say they won't eat pork. Kosher. "]

names = [" Home", " Apartment", " Spot"]
def range (min, max)
    rand * (max-min) + min
end
images = [
  "https://www.dropbox.com/s/h86o6t8gzwtojv3/ales-krivec-18049.jpg?dl=1",
  "https://www.dropbox.com/s/7ffkjx8efdawl12/ales-krivec-192941.jpg?dl=1",
  "https://www.dropbox.com/s/zgejjsejj79x423/alex-robert-133579.jpg?dl=1",
  "https://www.dropbox.com/s/pinef0qe2okqvhz/alexandre-godreau-182565.jpg?dl=1",
  "https://www.dropbox.com/s/vt4qh0rypa4lxi1/ali-inay-9851.jpg?dl=1",
  "https://www.dropbox.com/s/kmbyijpwdn41z3b/alisa-anton-191694.jpg?dl=1",
  "https://www.dropbox.com/s/3h157zk0p730hs2/alisa-anton-197031.jpg?dl=1",
  "https://www.dropbox.com/s/ky5aosnf6077oxy/anneliese-phillips-14460.jpg?dl=1",
  "https://www.dropbox.com/s/gjc63uka3i89tcx/annie-spratt-89768.jpg?dl=1",
  "https://www.dropbox.com/s/evinng012qxs94c/anthony-delanoix-16765.jpg?dl=1",
  "https://www.dropbox.com/s/v4ulkwkbbuftl7h/arno-smit-83025.jpg?dl=1",
  "https://www.dropbox.com/s/d7r8js7nmjldo75/arol-vinolas-133503.jpg?dl=1",
  "https://www.dropbox.com/s/s5n24wm8a5al3tp/aurelien-bellanger-3970.jpg?dl=1",
  "https://www.dropbox.com/s/s4rsjdezo91r7e2/ben-garratt-134771.jpg?dl=1",
  "https://www.dropbox.com/s/g8n4jojy7cycwf9/breather-163395.jpg?dl=1",
  "https://www.dropbox.com/s/btqa1d980ubas15/breather-187923.jpg?dl=1",
  "https://www.dropbox.com/s/5yr5jmzbjnnl45e/brooke-lark-93583.jpg?dl=1",
  "https://www.dropbox.com/s/wd46qnt2ulvrbq6/brooke-lark-158019.jpg?dl=1",
  "https://www.dropbox.com/s/xdw0pb8to7afajs/bruno-marinho-2645.jpg?dl=1",
  "https://www.dropbox.com/s/or5hndtnsh2do1n/carlo-trolese-162066.jpg?dl=1",
  "https://www.dropbox.com/s/1ajyusani1qi2cg/chris-lawton-148285.jpg?dl=1",
  "https://www.dropbox.com/s/tjzphgm9kxnp9z4/christian-lohner-21321.jpg?dl=1",
  "https://www.dropbox.com/s/vhqux211btbm2y0/chuttersnap-193788.jpg?dl=1",
  "https://www.dropbox.com/s/0f4976zkladrs2q/claudia-viloria-20157.jpg?dl=1",
  "https://www.dropbox.com/s/fwf38o2lxp64suu/clem-onojeghuo-99399.jpg?dl=1",
  "https://www.dropbox.com/s/ultk6k4gepj7rlg/clever-sparkle-190597.jpg?dl=1",
  "https://www.dropbox.com/s/b703nlvvdywq5mh/corina-ardeleanu-39934.jpg?dl=1",
  "https://www.dropbox.com/s/3k6v41ylbqw8rpp/cristina-gottardi-189937.jpg?dl=1",
  "https://www.dropbox.com/s/lmeq7t0lv1hnl1l/darius-soodmand-116253.jpg?dl=1",
  "https://www.dropbox.com/s/0i3g3q9ch9tba8j/dawid-zawila-193980.jpg?dl=1",
  "https://www.dropbox.com/s/nb5jeywp6eurn0d/dirk-sebregts-110695.jpg?dl=1",
  "https://www.dropbox.com/s/p3bz6rkf1xr8pwr/dominik-lange-86964.jpg?dl=1",
  "https://www.dropbox.com/s/9oyagkdvv3fpsz6/eduard-militaru-98570.jpg?dl=1",
  "https://www.dropbox.com/s/rmt3sgeo2y5d22l/eduard-militaru-129394.jpg?dl=1",
  "https://www.dropbox.com/s/iitceuk6b43tj78/eduard-militaru-129396.jpg?dl=1",
  "https://www.dropbox.com/s/mylgtd7ug9q6z3v/eduard-militaru-129399.jpg?dl=1",
  "https://www.dropbox.com/s/jt2x2gkbnmsnkuw/elizabeth-lies-6697.jpg?dl=1",
  "https://www.dropbox.com/s/1hps4roka7vzsua/elizabeth-lies-190772.jpg?dl=1",
  "https://www.dropbox.com/s/9b07u8z1m1wfa3d/erik-jan-leusink-149453.jpg?dl=1",
  "https://www.dropbox.com/s/m4pxn5zkjipabf8/erik-stine-41722.jpg?dl=1",
  "https://www.dropbox.com/s/xt2gjbdn2yn2jd6/erol-ahmed-80089.jpg?dl=1",
  "https://www.dropbox.com/s/elphbbsv8vwpj71/eva-blue-189555.jpg?dl=1",
  "https://www.dropbox.com/s/ymyeg1g3pdq7p8d/felicia-birloi-42667.jpg?dl=1",
  "https://www.dropbox.com/s/ify4yc0iwac73kb/fineas-anton-192161.jpg?dl=1",
  "https://www.dropbox.com/s/30yohr9j63kkyk1/freestocks-org-146074.jpg?dl=1",
  "https://www.dropbox.com/s/yhsat0bjzr7fucd/gabriel-beaudry-93843.jpg?dl=1",
  "https://www.dropbox.com/s/mqtle0nsd7bh1tx/gabriel-santiago-3978.jpg?dl=1",
  "https://www.dropbox.com/s/0aegwjjh4yucqb0/hernan-lucio-167579.jpg?dl=1",
  "https://www.dropbox.com/s/pq22339tj3ijjc0/inspiration-de-42175.jpg?dl=1",
  "https://www.dropbox.com/s/yqhm8yyipvtw6er/james-garcia-88107.jpg?dl=1",
  "https://www.dropbox.com/s/6qott8xdwbntf00/jamie-whiffen-182070.jpg?dl=1",
  "https://www.dropbox.com/s/8rum61imiozq2fj/jan-erik-waider-172273.jpg?dl=1",
  "https://www.dropbox.com/s/werk4t021djsjk8/jan-erik-waider-188828.jpg?dl=1",
  "https://www.dropbox.com/s/4gcode30rutu4o2/jay-cee-181272.jpg?dl=1",
  "https://www.dropbox.com/s/42hvmctajs7ycmc/jesse-vermeulen-17051.jpg?dl=1",
  "https://www.dropbox.com/s/mox4gygcz3utenx/john-moore-141727.jpg?dl=1",
  "https://www.dropbox.com/s/tt8u0vjxwjdypa7/john-towner-125993.jpg?dl=1",
  "https://www.dropbox.com/s/b6f6hxdqi8xr6ue/jon-phillips-17576.jpg?dl=1",
  "https://www.dropbox.com/s/1s41hqohnta5ifb/jonas-lavoie-levesque-397.jpg?dl=1",
  "https://www.dropbox.com/s/atfz102tw9t6d99/jordan-mcqueen-23284.jpg?dl=1",
  "https://www.dropbox.com/s/mzcechq5ozpyfn5/joseph-albanese-102983%20%281%29.jpg?dl=1",
  "https://www.dropbox.com/s/3jxo0dgxu6jm65k/joseph-albanese-102983.jpg?dl=1",
  "https://www.dropbox.com/s/7sn4ube7riorb83/joshua-ness-109299.jpg?dl=1",
  "https://www.dropbox.com/s/fd3h5ozh0ixyrj7/kari-shea-180802.jpg?dl=1",
  "https://www.dropbox.com/s/pjv7zmsysp1iihq/karsten-wurth-56781.jpg?dl=1",
  "https://www.dropbox.com/s/rxllh0syy5dvzra/karsten-wurth-206964.jpg?dl=1",
  "https://www.dropbox.com/s/ckfp2z3eopq9xwc/katie-barrett-164094.jpg?dl=1",
  "https://www.dropbox.com/s/dlo1mi4xhn8ik9p/katie-barrett-164108.jpg?dl=1",
  "https://www.dropbox.com/s/1qih33drvkx3nao/khurt-williams-10154.jpg?dl=1",
  "https://www.dropbox.com/s/vfguhc4xqdpz143/kira-ikonnikova-139388.jpg?dl=1",
  "https://www.dropbox.com/s/sfvk8vobbew4aiz/lauren-mancke-96341.jpg?dl=1",
  "https://www.dropbox.com/s/tp3uvxjv5ki9ers/lian-jonkman-45819.jpg?dl=1",
  "https://www.dropbox.com/s/7c4b3ahdm10gpp2/liliane-limpens-17371.jpg?dl=1",
  "https://www.dropbox.com/s/adwmmgiey40owt0/linh-nguyen-145766.jpg?dl=1",
  "https://www.dropbox.com/s/yt1qspglwbickdy/luca-bravo-24241.jpg?dl=1",
  "https://www.dropbox.com/s/59nrnoaj7yksdtz/luca-bravo-177552.jpg?dl=1",
  "https://www.dropbox.com/s/iqvn9xr835amlg8/margo-brodowicz-182628.jpg?dl=1",
  "https://www.dropbox.com/s/keh83umu9o4mij7/mariya-georgieva-45636.jpg?dl=1",
  "https://www.dropbox.com/s/sa73yhywclkdp5p/mark-rabe-180525.jpg?dl=1",
  "https://www.dropbox.com/s/1yd7pziyvdrzhcz/martin-jernberg-199797.jpg?dl=1",
  "https://www.dropbox.com/s/uozok4kz4gv2sy6/matt-jones-38742.jpg?dl=1",
  "https://www.dropbox.com/s/f8dzwahns2bovst/matt-lee-18766.jpg?dl=1",
  "https://www.dropbox.com/s/erexrv0ww3qmyav/maxwell-young-199053.jpg?dl=1",
  "https://www.dropbox.com/s/4gqjukwp2d8lmbw/naomi-hebert-188443.jpg?dl=1",
  "https://www.dropbox.com/s/sdaa83yseri1ifa/nico-beard-136417.jpg?dl=1",
  "https://www.dropbox.com/s/j88xu7dtmhrzc7u/nope-nope-95469.jpg?dl=1",
  "https://www.dropbox.com/s/8i00hnab2pacolp/norbert-levajsics-202945.jpg?dl=1",
  "https://www.dropbox.com/s/t584o10qjpbsoij/oshomah-abubakar-185964.jpg?dl=1",
  "https://www.dropbox.com/s/4i6vr17qzvehi5g/oskar-krawczyk-172847.jpg?dl=1",
  "https://www.dropbox.com/s/dz55b05uetlbosl/ostap-senyuk-136511.jpg?dl=1",
  "https://www.dropbox.com/s/8xvelibffkdi6ik/patrick-baum-194690.jpg?dl=1",
  "https://www.dropbox.com/s/vsdhacmv827487n/pavan-trikutam-2036.jpg?dl=1",
  "https://www.dropbox.com/s/pi66g9iraxzxkyw/peter-hershey-192001.jpg?dl=1",
  "https://www.dropbox.com/s/5oq3l5flyz86xx6/pietro-de-grandi-149555.jpg?dl=1",
  "https://www.dropbox.com/s/61qlyzdnzwxulhn/radek-grzybowski-144617.jpg?dl=1",
  "https://www.dropbox.com/s/hweiyzrngkdrz0c/raul-taciu-203116.jpg?dl=1",
  "https://www.dropbox.com/s/yzfa94y634qufno/ravi-pinisetti-149599.jpg?dl=1",
  "https://www.dropbox.com/s/x7aimq2ydxeumo6/riciardus-185610.jpg?dl=1",
  "https://www.dropbox.com/s/le26tmxa387bmmj/rob-bye-168862.jpg?dl=1",
  "https://www.dropbox.com/s/a6d88tc0zd30he6/roman-kraft-128742.jpg?dl=1",
  "https://www.dropbox.com/s/y52rhj6ov7ujt7l/sam-shin-98029.jpg?dl=1",
  "https://www.dropbox.com/s/xwuvwve57ifr3oa/scott-webb-167099.jpg?dl=1",
  "https://www.dropbox.com/s/f14zufrlogb1rdl/seth-doyle-204266.jpg?dl=1",
  "https://www.dropbox.com/s/988xadrkxjjx0gm/simon-mumenthaler-174174.jpg?dl=1",
  "https://www.dropbox.com/s/09yc121zfpi82cb/sonja-guina-2235.jpg?dl=1",
  "https://www.dropbox.com/s/6410165d6ytmit1/soren-astrup-jorgensen-151102.jpg?dl=1",
  "https://www.dropbox.com/s/rowerguznrkx8fj/terrah-holly-16329.jpg?dl=1",
  "https://www.dropbox.com/s/nc519kkv98cakc4/thomas-shellberg-31280.jpg?dl=1",
  "https://www.dropbox.com/s/q0d5e4prv8zz63j/tim-trad-196418.jpg?dl=1",
  "https://www.dropbox.com/s/3zo93mmjtki50fh/valor-kopeny-31409.jpg?dl=1",
  "https://www.dropbox.com/s/x7qbsz9r999jslp/vita-vilcina-3217.jpg?dl=1",
  "https://www.dropbox.com/s/d7qsb8dsoq0xfag/worthy-of-elegance-13577.jpg?dl=1"
]
spots = []
property_types = ["full home", "shared room", "private room"]
40.times do |spot|
  address = Faker::Address.street_name
  bed_number = rand(2..7)
  spot = Spot.create!(owner_id: user_ids[rand(0..5)], name: address + names[rand(0..2)],
  location: address,
  lat: range(48.815573, 48.9021449), lng: range(2.224199, 2.4699208), price: rand(80..350), description: descriptions[rand(0..8)],
  guest_limit: (bed_number + 2), property_type: property_types[rand(0..2)], image: open(images[spot]),
  bed_number: bed_number,
  bathroom_number: (bed_number - 1),
  pets_allowed: [true, false].sample,
  featured: true,
  family_friendly: [true, false].sample,
  kitchen: [true, false].sample,
  cancellation_policy: ["strict","moderate"].sample)
  spots.push(spot)
end



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
    Booking.create!(guest_id: guest.id, spot_id: spot.id,
    start_date: Date.new(2017,month+1,rand(1..3)),
    end_date: Date.new(2017,month+1,rand(4..6)),
    availability_id: availability.id,
    spot_review: reviews[rand(0..reviews.length-1)])
  end
end


# Booking.create!(guest_id: owner2.id, spot_id: spot.id, start_date: Date.new(2017,month+1,rand(7..9)), end_date: Date.new(2017,month+1,rand(10..14)), availability_id: availability.id)
# Booking.create!(guest_id: owner3.id, spot_id: spot.id, start_date: Date.new(2017,month+1,rand(16..20)), end_date: Date.new(2017,month+1,rand(21..25)), availability_id: availability.id)
