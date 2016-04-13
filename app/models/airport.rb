# == Schema Information
#
# Table name: airports
#
#  id         :integer          not null, primary key
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  name       :text
#

class Airport < ActiveRecord::Base
  has_many :flights
end
