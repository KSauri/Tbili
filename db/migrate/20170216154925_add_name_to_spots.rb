class AddNameToSpots < ActiveRecord::Migration
  def change
    add_column :spots, :name, :string
  end
end
