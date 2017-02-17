class AddAvailabilityIdtoBookings < ActiveRecord::Migration
  def change
    add_column :bookings, :availability_id, :integer
    add_index :bookings, :availability_id
  end
end
