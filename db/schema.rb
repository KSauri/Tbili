# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170216150119) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "spots", force: :cascade do |t|
    t.integer "owner_id",                                 null: false
    t.boolean "featured",            default: false
    t.string  "location"
    t.float   "lng",                                      null: false
    t.float   "lat",                                      null: false
    t.integer "price"
    t.text    "description"
    t.integer "guest_limit",         default: 5,          null: false
    t.integer "bed_number",          default: 3,          null: false
    t.integer "bathroom_number",     default: 3,          null: false
    t.string  "property_type",                            null: false
    t.boolean "pets_allowed",        default: true
    t.boolean "wireless_internet",   default: true
    t.boolean "kitchen",             default: true
    t.boolean "family_friendly",     default: true
    t.integer "monthly_discount",    default: 20
    t.integer "weekly_discount",     default: 5
    t.string  "cancellation_policy", default: "moderate"
    t.integer "minimum_stay",        default: 2
  end

  add_index "spots", ["lat"], name: "index_spots_on_lat", using: :btree
  add_index "spots", ["lng"], name: "index_spots_on_lng", using: :btree
  add_index "spots", ["owner_id"], name: "index_spots_on_owner_id", using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "email",               null: false
    t.string   "f_name",              null: false
    t.string   "l_name",              null: false
    t.string   "password_digest",     null: false
    t.string   "session_token",       null: false
    t.string   "image_url"
    t.date     "join_date"
    t.string   "location"
    t.text     "description"
    t.string   "avatar_file_name"
    t.string   "avatar_content_type"
    t.integer  "avatar_file_size"
    t.datetime "avatar_updated_at"
  end

  add_index "users", ["email"], name: "index_users_on_email", using: :btree
  add_index "users", ["f_name"], name: "index_users_on_f_name", using: :btree
  add_index "users", ["l_name"], name: "index_users_on_l_name", using: :btree
  add_index "users", ["password_digest"], name: "index_users_on_password_digest", using: :btree
  add_index "users", ["session_token"], name: "index_users_on_session_token", using: :btree

end
