class CreateBookings < ActiveRecord::Migration
  def change
    create_table :bookings do |t|
      t.integer :guest_id, null: false
      t.integer :spot_id, null: false
      t.text :guest_review
      t.text :spot_review
      t.integer :spot_review_star_count
      t.integer :guest_number
      t.date :start_date, null: false
      t.date :end_date, null: false
      t.timestamps
    end
    add_index :bookings, :start_date
    add_index :bookings, :end_date
    add_index :bookings, :guest_id
    add_index :bookings, :spot_id
  end
end
