class AddAirportIdsToFlights < ActiveRecord::Migration
  def change
    add_column :flights, :origin_id, :integer
    add_column :flights, :destination_id, :integer
    remove_column :flights, :origin
    remove_column :flights, :destination
  end
end
