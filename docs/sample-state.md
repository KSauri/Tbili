```js
{
  session: {
    currentUser: {
      id: 1,
      username: "Ahab"
    }
    errors: []
  },
  spots: {
    1: {
      id: 1,
      price: 700,
      image_url: "123.jpeg",
      description: "Cozy and lovely little home",
      pets_allowed: false,
      location: "Prague"
      rating: 4,
      availability: [[3,17,2017],
        [5,5,2017],
        [5,6,2017],
        [5,7,2017],
        ...]
      // other_details_etc: ""
    }
  },
  spot_reviews: {
    1: {
      id: 1,
      spot_id: 7,
      star_count: 3,
      review_text: "The apartment was just ok."
    }
  },
  bookings: {
    1: {
      id: 1,
      spot_name: "Splendid Apartment",
      location: "Shanghai",
      host_name: "Sean",
      start_date: 01/10/2017,
      end_date: 01/30/2017,
      // other_details_etc: ""
    }
  },
  user_detail: {
    6: {
      id: 6,
      username: "Juan",
      image_url: "juan_pics.jpeg",
      join_date: "10/10/2014",
    }
  },
  user_trips: {
    username: "Sheryl",
    trips: {
      1: {
        id: 1,
        spot_name: "Splendid Apartment",
        location: "Shanghai",
        host_name: "Sean",
        start_date: 01/10/2017,
        end_date: 01/30/2017,
        // other_details_etc: ""
      },
      2: {
        id: 2,
        spot_name: "Cozy Bungalow",
        location: "Hong Kong",
        host_name: "Derel",
        start_date: 02/10/2017,
        end_date: 02/25/2017,
        // other_details_etc: ""
      }
    }
  }
  user_reviews: {
    17: {
      id: 17,
      username: "Carlos",
      hostname: "Stephanie",
      review: "Carlos was a kind guest"
    }
  }


}
