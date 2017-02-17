class AddIndexToAvailabilities < ActiveRecord::Migration
  def change
    add_index :availabilities, :spot_id
    add_index :availabilities, :start_date
    add_index :availabilities, :end_date
  end
end
