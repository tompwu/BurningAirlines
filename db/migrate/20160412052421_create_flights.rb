class CreateFlights < ActiveRecord::Migration
  def change
    create_table :flights do |t|
      t.integer :plane_id
      t.text :origin
      t.text :destination
      t.datetime :date_time

      t.timestamps null: false
    end
  end
end
