class AddNullConstraintToBookingAvailabilityId < ActiveRecord::Migration
  def change
    change_column :bookings, :availability_id, :integer, null: false
  end
end
