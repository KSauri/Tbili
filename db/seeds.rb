# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


user_avatars = [
  "https://www.dropbox.com/s/ksgt6wavbji0qhs/ajax-728x410.jpg?dl=1",
  "https://www.dropbox.com/s/8r76zb5nlnozh51/Cyrus.jpg?dl=1",
  "https://www.dropbox.com/s/zrhp9tmuu72c5ad/luther.jpg?dl=1",
  "https://www.dropbox.com/s/rpnh7q8mhyu7eze/mercy.PNG?dl=1",
  "https://www.dropbox.com/s/rqe7eswm73ahjcf/rembrandt.jpg?dl=1",
  "https://www.dropbox.com/s/oea9visi0gvsvqu/swan.jpg?dl=1"
]

User.destroy_all
#
guest = User.create!(email: "guest@fakemail.com", f_name: "Guest", password: "password",
  l_name: "Guestington",
  join_date: Date.today, location: "New York",
  description: "")

owner1 = User.create!(email: "owner1@owner.com", f_name: "Ajax", password: "password",
  l_name: "Winston",
  join_date: Date.today, location: "New York",
  description: "",
  avatar: open(user_avatars[0]))
owner2 = User.create!(email: "owner2@owner.com", f_name: "Cyrus", password: "password",
  l_name: "Holmes",
  join_date: Date.today, location: "Prague",
  description: "",
  avatar: open(user_avatars[1]))
owner3 = User.create!(email: "owner3@owner.com", f_name: "Luther", password: "password",
  l_name: "Day Lewis",
  join_date: Date.today, location: "Sofia",
  description: "",
  avatar: open(user_avatars[2]))
owner4 = User.create!(email: "owner4@owner.com", f_name: "Mercy", password: "password",
  l_name: "Mawr",
  join_date: Date.today, location: "Minsk",
  description: "",
  avatar: open(user_avatars[3]))
owner5 = User.create!(email: "owner5@owner.com", f_name: "Swan", password: "password",
  l_name: "Lawrence",
  join_date: Date.today, location: "Austin",
  description: "",
  avatar: open(user_avatars[5]))

user_ids = [guest.id, owner1.id, owner2.id, owner3.id, owner4.id, owner5.id]

Spot.destroy_all


descriptions = ["Nestled in the hills, this cozy spot is perfect for any getaway.  Bring your kids, we have very family friendly accomodations! Located close to the city center, restaurants, and the lovely night life.",
  "Expansive and recently redecorated modern home.  Features king sized bed, fully stocked kitchen, and cappuccino maker.  The neighborhood is very friendly and authentic.  You'll not want to leave!!",
  "Modern and cozy, this place is close to museums and fabulous restaurants.  Features a spacious terrace with magnificent views of the city's beautiful attractions",
  "Come stay in this amazing home!  Features a cozy sitting room and a bedroom located on the top floor, with roof access!  Spiral staircase and breakfast nook also included.  The town features excellent pubs and lovely little shops",
  "Spectacular villa sits in elevated position in one of the last remanining untouched parts of the city.",
  "Discover daily local life in city center, friendly neighborhood, clandestine casino, karaoke, old-style artisans, art gallery and artist studio downstairs, few steps from river, local arts area and subways. Arty and modern loft, 1000ft2 or 90m2, bay windows, balcony, decorated with antics, art collections, vintage objects, designer furnitures.",
  "NEW apartment for several guests.  You will appreciate your holidays in my flat.  You will have all the commodities.  The area is perfect for discovering the city.  Close to many tourist sites and local hangouts...  And bakeries, shopping center, supermarket and restaurants at your doorstep.  Welcome home!",
  "Very calm independent apartment with panoramic views.  Very bright and large bedroom with a wide glass wall, balcony/terrace.  Equipped kitchenette, bathroom with shower and indepdendent toilets.  Metro at the foot of the building!",
  "Studio at corner of main street, our place is a few blocks from main art museum.  It is an ideal place for combining and visits and shopping in the exciting city!  An feel like being really from city in the family like 15th district.",
  "Fashionable flat.  Located 100 meters from metro.  Very close to restaurant hub.  Very quiet and luminous.  Big bathroom with shower, and normally everythign you could need!  Perfect for couples or for one person.",
  "This single family home ft a completely remodeled private master bed/bath rm and has its own private entrace thru my beautiful backyard.  A comfortable queen mattress makes it great for 1-2 guests.  The bathroom ft double sinks, stand in shower, and a jacuzzi tub.  plenty of built in closet space and also a mini fridge, toaster oven, coffee maker, computer, desk all at your convenience.  Or take some time to relax in my backyard.",
  "This is a BEAUTIFUL and NEWLY FURNISHED apartment home located only 5 minutes away from the famous convention center.  Great location, downtown close to everything!  The apartment is very spacious and comfortable.  This complex offers top level features and amenities to enjoy while you stay indoors. Gym, pool, tennis court, hot tub and more! You get one free parking space included in your stay. Great Deal!!",
  "Prime Location! 2blks to metro.  Close to Movie Theater, Metro Station. near airport.  Ideal private room for a solo traveler, or a couple. Shared living spaces (Dining room, kitchen, living room, backyard) with a female and a small dog. (a sweet loving Maltipoo) Private room is spacious with a comfortable queen bed. Private full guest bathroom/shower. Beautiful quiet Backyard and Street. Lots of easy parking, Free Coffee !",
  "A double bedroom on the 4th floor of the building at famous train station. It has its own en suite bathroom. You are welcome to use the main kitchen, unless there are events being held there which I will tell you about."]

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
  "https://www.dropbox.com/s/d7qsb8dsoq0xfag/worthy-of-elegance-13577.jpg?dl=1",
  "https://www.dropbox.com/s/z1l6hr6hhsa7ff8/alisa-anton-182057%20%282%29.jpg?dl=1",
  "https://www.dropbox.com/s/6j04xua8bw1jtk8/andrew-neel-141710.jpg?dl=1",
  "https://www.dropbox.com/s/f0s1qkkam8z21ha/andrey-yachmenov-28847.jpg?dl=1",
  "https://www.dropbox.com/s/ehedk2lbyhchqdv/annie-spratt-102808.jpg?dl=1",
  "https://www.dropbox.com/s/vsgu0tj6kku69d7/anthony-delanoix-21053.jpg?dl=1",
  "https://www.dropbox.com/s/ae9u1x1nqowi139/anthony-delanoix-34353.jpg?dl=1",
  "https://www.dropbox.com/s/rnx5gmv380fx2oz/anthony-delanoix-43715.jpg?dl=1",
  "https://www.dropbox.com/s/kqn04uvhpbrmi5e/anton-sulsky-111.jpg?dl=1",
  "https://www.dropbox.com/s/mkmzwt5xxcqsm7h/breather-7171.jpg?dl=1",
  "https://www.dropbox.com/s/cstft7pg0mmkzo5/breather-7177.jpg?dl=1",
  "https://www.dropbox.com/s/63gh2wyr8vl6cdg/breather-7188.jpg?dl=1",
  "https://www.dropbox.com/s/obk3d4n0vguskrz/breather-187924.jpg?dl=1",
  "https://www.dropbox.com/s/tk2c48qibnre4w6/breather-187925.jpg?dl=1",
  "https://www.dropbox.com/s/frdszub1z5pify0/breather-196126.jpg?dl=1",
  "https://www.dropbox.com/s/iywh6il21rd8gkd/breather-196135.jpg?dl=1",
  "https://www.dropbox.com/s/cityuvavk3frjb4/chris-lawton-33951.jpg?dl=1",
  "https://www.dropbox.com/s/9uagtehy2kwil8p/christos-barbalis-86853.jpg?dl=1",
  "https://www.dropbox.com/s/ur7nqrmij3emaqg/colin-maynard-138246.jpg?dl=1",
  "https://www.dropbox.com/s/012djf963lzkcdn/daria-nepriakhina-107318.jpg?dl=1",
  "https://www.dropbox.com/s/78b3g0e4l16tbsf/drew-coffman-100869.jpg?dl=1",
  "https://www.dropbox.com/s/frgiqx25gs59nii/eduard-militaru-133851.jpg?dl=1",
  "https://www.dropbox.com/s/bkhzl0m0vc2d630/ehud-neuhaus-108369.jpg.crdownload?dl=1",
  "https://www.dropbox.com/s/hwww8n6yj69qqhf/epicurrence-64516.jpg?dl=1",
  "https://www.dropbox.com/s/3d1c5o00kh8f2p1/gina-zee-97522.jpg?dl=1",
  "https://www.dropbox.com/s/203o3zbuq09qgmd/henry-mcintosh-41462.jpg?dl=1",
  "https://www.dropbox.com/s/qehmexa8j29gj26/jasper-boer-20743.jpg?dl=1",
  "https://www.dropbox.com/s/tlnr9tdj0zksd8i/jens-kreuter-85328.jpg?dl=1",
  "https://www.dropbox.com/s/hypqwmdtm4rypju/jim-digritz-2454.jpg?dl=1",
  "https://www.dropbox.com/s/sqzdzt70ahcuoh2/jorgen-haland-130138.jpg?dl=1",
  "https://www.dropbox.com/s/mpninr1ntxj2z8i/kris-atomic-39750.jpg?dl=1",
  "https://www.dropbox.com/s/hv1pe29ovnhrx7r/liliane-limpens-66333.jpg?dl=1",
  "https://www.dropbox.com/s/lz6cjtgkboesibj/luca-bravo-211360.jpg?dl=1",
  "https://www.dropbox.com/s/urjvo3xjgl1ea18/margaret-barley-42.jpg?dl=1",
  "https://www.dropbox.com/s/vmsvgfizwp4gmmo/maxime-amoudruz-99191.jpg?dl=1",
  "https://www.dropbox.com/s/7156s43r0mml13i/peter-oswald-128886.jpg?dl=1",
  "https://www.dropbox.com/s/gne29dil3082ivn/raining-huang-31298.jpg?dl=1",
  "https://www.dropbox.com/s/136z2wog9awmhnk/rik-van-der-kroon-95384.jpg?dl=1",
  "https://www.dropbox.com/s/lvpj1ou5tdoni2x/rob-bye-66755.jpg?dl=1",
  "https://www.dropbox.com/s/xxjum7fm09e9c68/roman-mager-59779.jpg?dl=1",
  "https://www.dropbox.com/s/hm5yac4ywpsxsm3/sabri-tuzcu-187162.jpg?dl=1",
  "https://www.dropbox.com/s/8i5w7jcpuy5rvb6/samuel-sosina-3081.jpg?dl=1",
  "https://www.dropbox.com/s/2x2l6ay5pfxhe0j/sophie-sollmann-140960.jpg?dl=1",
  "https://www.dropbox.com/s/3zbod8oa8e1frv8/todd-diemer-113294.jpg?dl=1",
  "https://www.dropbox.com/s/s6lvc61ri89pm00/tomasz-rynkiewicz-91040.jpg?dl=1",
  "https://www.dropbox.com/s/na4anh1mxobn355/valentina-locatelli-130318.jpg?dl=1",
  "https://www.dropbox.com/s/8w61ogu6j71bmmp/yoosun-won-23758.jpg?dl=1"
]
spots = []
property_types = ["full home", "shared room", "private room"]
imagecount = 0
25.times do |spot|
  address = Faker::Address.street_name
  bed_number = rand(2..7)
  spot = Spot.create!(owner_id: user_ids[rand(0..5)], name: address + names[rand(0..2)],
  location: address,
  lat: range(48.815573, 48.9021449), lng: range(2.224199, 2.4699208), price: rand(80..350), description: descriptions[rand(0..8)],
  guest_limit: (bed_number + 2), property_type: property_types[rand(0..2)], image: open(images[imagecount]),
  bed_number: bed_number,
  bathroom_number: (bed_number - 1),
  pets_allowed: [true, false].sample,
  featured: true,
  family_friendly: [true, false].sample,
  kitchen: [true, false].sample,
  cancellation_policy: ["strict","moderate"].sample)
  spots.push(spot)
  imagecount += 1
end
25.times do |spot|
  address = Faker::Address.street_name
  bed_number = rand(2..7)
  spot = Spot.create!(owner_id: user_ids[rand(0..5)], name: address + names[rand(0..2)],
  location: address,
  lat: range(40.4773991, 40.9175771), lng: range(-74.25908989999, -73.70027209999), price: rand(80..400), description: descriptions[rand(0..8)],
  guest_limit: (bed_number + 2), property_type: property_types[rand(0..2)], image: open(images[imagecount]),
  bed_number: bed_number,
  bathroom_number: (bed_number - 1),
  pets_allowed: [true, false].sample,
  featured: true,
  family_friendly: [true, false].sample,
  kitchen: [true, false].sample,
  cancellation_policy: ["strict","moderate"].sample)
  spots.push(spot)
  imagecount += 1
end
25.times do |spot|
  address = Faker::Address.street_name
  bed_number = rand(2..7)
  spot = Spot.create!(owner_id: user_ids[rand(0..5)], name: address + names[rand(0..2)],
  location: address,
  lat: range(3.0336329, 3.2433789), lng: range(101.61545, 101.758529), price: rand(80..350), description: descriptions[rand(0..8)],
  guest_limit: (bed_number + 2), property_type: property_types[rand(0..2)], image: open(images[imagecount]),
  bed_number: bed_number,
  bathroom_number: (bed_number - 1),
  pets_allowed: [true, false].sample,
  featured: true,
  family_friendly: [true, false].sample,
  kitchen: [true, false].sample,
  cancellation_policy: ["strict","moderate"].sample)
  spots.push(spot)
  imagecount += 1
end
25.times do |spot|
  address = Faker::Address.street_name
  bed_number = rand(2..7)
  spot = Spot.create!(owner_id: user_ids[rand(0..5)], name: address + names[rand(0..2)],
  location: address,
  lat: range(49.94193629999999, 50.177403), lng: range(14.7067945, 14.2244533), price: rand(80..350), description: descriptions[rand(0..8)],
  guest_limit: (bed_number + 2), property_type: property_types[rand(0..2)], image: open(images[imagecount]),
  bed_number: bed_number,
  bathroom_number: (bed_number - 1),
  pets_allowed: [true, false].sample,
  featured: true,
  family_friendly: [true, false].sample,
  kitchen: [true, false].sample,
  cancellation_policy: ["strict","moderate"].sample)
  spots.push(spot)
  imagecount += 1
end
25.times do |spot|
  address = Faker::Address.street_name
  bed_number = rand(2..7)
  spot = Spot.create!(owner_id: user_ids[rand(0..5)], name: address + names[rand(0..2)],
  location: address,
  lat: range(-34.3598061, -33.47127), lng: range(18.3074488, 19.00467), price: rand(80..350), description: descriptions[rand(0..8)],
  guest_limit: (bed_number + 2), property_type: property_types[rand(0..2)], image: open(images[imagecount]),
  bed_number: bed_number,
  bathroom_number: (bed_number - 1),
  pets_allowed: [true, false].sample,
  featured: true,
  family_friendly: [true, false].sample,
  kitchen: [true, false].sample,
  cancellation_policy: ["strict","moderate"].sample)
  spots.push(spot)
  imagecount += 1
end
25.times do |spot|
  address = Faker::Address.street_name
  bed_number = rand(2..7)
  spot = Spot.create!(owner_id: user_ids[rand(0..5)], name: address + names[rand(0..2)],
  location: address,
  lat: range(-24.0082209, -23.3566039), lng: range(-46.825514, -46.3650844), price: rand(80..350), description: descriptions[rand(0..8)],
  guest_limit: (bed_number + 2), property_type: property_types[rand(0..2)], image: open(images[imagecount]),
  bed_number: bed_number,
  bathroom_number: (bed_number - 1),
  pets_allowed: [true, false].sample,
  featured: true,
  family_friendly: [true, false].sample,
  kitchen: [true, false].sample,
  cancellation_policy: ["strict","moderate"].sample)
  spots.push(spot)
  imagecount += 1
end



reviews = ["Such a lovely place!  The balcony view was fantastic and our
  host was so helpful!  A+ would definitely stay here again",
  "Host did not respond to my calls, arrived at the airport late and
  was overall very rude.  The apartment itself was as described and clean,
  and the kitchen was well stocked.  The city itself is not very far, we
  were able to find taxis usually and the cab drivers were helpful.",
  "Love love love! This place was just what me and my family was looking for!
  We arrived late at night but our host came to meet us at the bus terminal.
  She even brought muffins! The place was very family-friendly, with easy
  access to local amenities and a fun den for the kids.  Definitely recommend",
  "Very nice.  Would stay again", "It ok.", "The place was somewhat small,
  the pictures make it look bigger than it actually is.  It is a 30 minute
  commute to the city center, which is fine I suppose.  The host needs to
  keep the kitchen a bit cleaner, and stuff was kind of cluttered throughout
  the apartment.  There are also some dogs nearby who make it hard to sleep.",
  "DON'T STAY HERE! The host was 4 hours late and did not have a key for us!
  It practically ruined my stay! The place also does not look the same as the picture -
  the place in the picture is much nicer!", "The host was so nice and she
  has a dog! It should probably mention it in the description but the dog is
  super cute!","A casa foi muito legal! Tudo fico perfeito. A minha familia fico muito feliz neste lugar. Que linda!",
  "saxli iqo dzan didi da supta. Samzareulo konda bevri sakvebi. Tu
  tkven shegidzliat waikitxot es, ki, chemi kartuli es tsudi.",
  "너무나도 깨끗해서 마음에 들었어요. 서비스도 너무 좋았습니다. 와이파이가 가끔 잘 안 잡히는건 있었어요. 전체적으로 너무 좋았고, 다시 꼭 오고 싶습니다",
  "আমি এই পর্যন্ত ভ্রমন  এর কারণে বিভীন্ন বাসা ভাড়া করেছি, কিন্তু আতিথেয়তার দিক থেকে এটি ছিল আমার সব চাইতে সেরা অভিজ্ঞতা। সম্পূর্ণ বাসা পরিপূর্ণ ভাবে পরিষ্কার এবং গুছানো। বাসার মালিক সব সময় খেয়াল রাখছিলো আমাদের কোনো অসুবিধা হচ্ছে নাকি না। বাসার লোকেশন ও চমৎকার। সব মিলিয়ে ভ্রমণের জন্য এ শহরে এটিই  আমার মতে সেরা বাসা !",
  "这里的主人非常热情，房间非常干净，地理位置很方便，我极力推荐这个地方。",
  "GREAT place to stay! My business partners and I came into town for business and it couldn't have been easier. We were right next to the financial district. The highway was right there as well so we were able to shoot right over to the convention center.  I highly recommend!",
  "The wall of this entry was hung all over with a heathenish array of monstrous clubs and spears.  Some were thickly set with glittering teeth resembling ivory saws; others were tufted with knots of human hair; and one was sickle-shaped, with a vast handle sweeping round like the segment made in the new-mown grass by a long-armed mower.",
  "ห้องนอนสะอาดมากครับ โรงอยู่ใกล้กันกลางเหมืองและร้านอาหารอร่อยมากครับ"
  ]







Availability.destroy_all
Booking.destroy_all
11.times do |month|
  spots.each do |spot|
    availability = Availability.create!(spot_id: spot.id, start_date: Date.new(2017,month+1,1), end_date: Date.new(2017,month+1,28))
    Booking.create!(guest_id: user_ids.sample, spot_id: spot.id,
    start_date: Date.new(2017, month+1,rand(1..3)),
    end_date: Date.new(2017, month+1,rand(4..6)),
    availability_id: availability.id,
    spot_review: reviews.sample)
  end
end


# Booking.create!(guest_id: owner2.id, spot_id: spot.id, start_date: Date.new(2017,month+1,rand(7..9)), end_date: Date.new(2017,month+1,rand(10..14)), availability_id: availability.id)
# Booking.create!(guest_id: owner3.id, spot_id: spot.id, start_date: Date.new(2017,month+1,rand(16..20)), end_date: Date.new(2017,month+1,rand(21..25)), availability_id: availability.id)
