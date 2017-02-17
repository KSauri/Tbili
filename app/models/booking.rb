class Booking < ActiveRecord::Base
  validates :guest, :spot, :start_date, :end_date, presence: true
  # validate :start_must_come_before_end, :spot_must_be_available

  belongs_to :guest,
    class_name: "User",
    foreign_key: :guest_id
  belongs_to :spot
  belongs_to :availability



end
