# == Schema Information
#
# Table name: flights
#
#  id          :integer          not null, primary key
#  plane_id    :integer
#  origin      :text
#  destination :text
#  date_time   :datetime
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Flight < ActiveRecord::Base
  has_many :reservations
  belongs_to :plane
end
