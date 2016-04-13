# == Schema Information
#
# Table name: flights
#
#  id             :integer          not null, primary key
#  plane_id       :integer
#  date_time      :datetime
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#  origin_id      :integer
#  destination_id :integer
#

class Flight < ActiveRecord::Base
  has_many :reservations
  belongs_to :origin, :class_name => 'Airport'
  belongs_to :destination, :class_name => 'Airport'
  belongs_to :plane
end
