# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

## JSON API

### Users

- `POST /api/users` - create new user
- `PATCH /api/users` - update user info
- `GET /users/:id` - fetch user details for user profile

### Session

- `POST /api/session` - log in user
- `DELETE /api/session` - log out user

### Home (INDEX ROUTE)
- `GET /` - loads home page

### Spots/Seach

- `GET /api/spots`
  - spots index/search actions
  - accepts 'featured' param and will fetch featured spots if available
  - accepts location, start_date, and end_date query params to fetch available
    spots
- `PATCH /api/spots` - edit search criteria
- `GET /api/spots/:spotId` - fetch one spot
- `POST /api/spots` - bonus feature, users can create spots as hosts

### Notebooks

- `GET /api/bookings` - fetches all bookings for user
- `POST /api/bookings` - create a booking
- `DELETE /api/bookings/:id` - cancel a booking

### Tags

- `GET /api/messages` - fetches message history for user
- `GET /api/messages/:conversationId` - fetches one conversation for user
- `PATCH /api/messages/:conversationId` - sends message to other user in
  conversation
