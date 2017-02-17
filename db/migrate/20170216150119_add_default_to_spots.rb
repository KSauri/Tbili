class AddDefaultToSpots < ActiveRecord::Migration
  def change
    change_column :spots, :featured, :boolean, :default => false
    change_column :spots, :guest_limit, :integer, :default => 5
    change_column :spots, :bed_number, :integer, :default => 3
    change_column :spots, :bathroom_number, :integer, :default => 3
    change_column :spots, :pets_allowed, :boolean, :default => true
    change_column :spots, :wireless_internet, :boolean, :default => true
    change_column :spots, :kitchen, :boolean, :default => true
    change_column :spots, :family_friendly, :boolean, :default => true
    change_column :spots, :monthly_discount, :integer, :default => 20
    change_column :spots, :weekly_discount, :integer, :default => 5
    change_column :spots, :cancellation_policy, :string, :default => "moderate"
    change_column :spots, :minimum_stay, :integer, :default => 2
  end
end
