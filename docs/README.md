# Tbili

[Heroku link][heroku] ** this will be link to production site

[Airbnb link][airbnb]

[heroku]: http://www.herokuapp.com
[airbnb]: https://www.airbnb.com/

## Minimum Viable Product

Tbili is a single page web app that emulates Airbnb using Ruby on Rails and
React/Redux.  By the end of week 9, this app will, at minimum, satisfy the
following criteria with smooth, bug-free navigation, suitable seed data,
and accurate CSS styling:

- [ ] Hosting on Heroku
- [ ] New account creation, login, and guest/demo login
- [ ] Spots
- [ ] Bookings
- [ ] Spots search, using location and availability, and Google maps on search
- [ ] Reviews
- [ ] Production README

## Design Docs
* [View Wireframes][wireframes]
* [React Components][components]
* [API endpoints][api-endpoints]
* [DB schema][schema]
* [Sample State][sample-state]

[wireframes]: ./wireframes/
[components]: component-hierarchy.md
[sample-state]: sample-state.md
[api-endpoints]: api-endpoints.md
[schema]: schema.md

## Implementation Timeline

### Phase I: Backend setup and Front End User Authentication (2 days)

**Objective:** Functioning homepage with working log in and sign up modals.

### Phase II: Spot model, recent and featured spots (1 day)

**Objective:** Featured and recent spots are listed on the homepage with active
links to spot detail pages.

### Phase III: Spot search page with google map and homepage search bar (3 days)

**Objective:** Search bar will accept different parameters and return the
search results page.  

### Phase IV: Spot show pages (2 days)

**Objective:** Each spot will have a map and details on its show page.

### Phase V: Bookings model and form (1 day)

**Objective:** Bookings belong to a spot and user.  They will populate a user's
trip show page.

### Phase VI: Reviews model (1 day)

**Objective:** Spots will have reviews left by past guests

### Bonus Features (TBD)
- [ ] Users and host profile pages
- [ ] Message index and conversation show pages
