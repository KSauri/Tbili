# Schema Information

## users
column name | data type | details
:---:|:---:|:---:
id | integer | not null, primary key
username | string | not null, indexed, unique
email | string | not null, indexed, unique
f_name | string | not null, indexed
l_name | string | not null, indexed
password_digest | string | not null
session_token | string | not null, indexed, unique
image_url | string
join_date | date
location | string
description | text

## sessions
column name | data type | details
:---:|:---:|:---:
id | integer | not null, primary key
user_id | integer | not null, indexed
http_user_agent | string | not null

## spots
column name | data type | details
:---:|:---:|:---:
id | integer | not null, primary key
owner_id | integer | not null, foreign key (references users), indexed
featured | boolean | not null, indexed
location | string | not null
longitude | float | not null
latitude | float | not null
price | integer | not null, indexed
image_url | string | not null
description | text | not null
guest limit | integer | not null
accomodation_size | integer | not null
beds | integer | not null
bedrooms | string
bathrooms | integer | not null
property_type | string | not null
room_type | string | not null
pets_allowed | boolean |
wireless_internet | boolean
kitchen | boolean
family_friendly | boolean
monthly_discount | integer
weekly_discount | integer
cancellation_type | string
minimum_stay | integer

## bookings
column name | data type | details
:---:|:---:|:---:
id | integer | not null, primary key
guest_id | integer | not null, foreign key (references users), indexed
spot_id | integer | not null, foreign key (references spots), indexed
guest_review | text
spot_review | text
spot_review_star_count | integer
guest_number | integer
start_date | date | not null
end_date | date | not null

## availability
column name | data type | details
:---:|:---:|:---:
id | integer | not null, primary key
spot_id | integer | not null, foreign key (references spots), indexed
day | date
