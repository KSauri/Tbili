class CreateSpots < ActiveRecord::Migration
  def change
    create_table :spots do |t|
      t.integer :owner_id, null: false
      t.boolean :featured
      t.string :location
      t.float :lng, null: false
      t.float :lat, null: false
      t.integer :price
      t.text :description
      t.integer :guest_limit, null: false
      t.integer :bed_number, null: false
      t.integer :bathroom_number, null: false
      t.string :property_type, null: false
      t.boolean :pets_allowed
      t.boolean :wireless_internet
      t.boolean :kitchen
      t.boolean :family_friendly
      t.integer :monthly_discount
      t.integer :weekly_discount
      t.string :cancellation_policy
      t.integer :minimum_stay
    end
    add_index :spots, :owner_id
    add_index :spots, :lng
    add_index :spots, :lat
  end
end
