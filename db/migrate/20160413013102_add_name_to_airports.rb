class AddNameToAirports < ActiveRecord::Migration
  def change
    add_column :airports, :name, :text
  end
end
