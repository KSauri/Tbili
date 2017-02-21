class Availability < ActiveRecord::Base
  validates :spot, :start_date, :end_date, presence: true
  # validate :start_must_come_before_end, :spot_must_be_available

  belongs_to :spot
  has_many :bookings





end
