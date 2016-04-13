class CreateAirports < ActiveRecord::Migration
  def change
    create_table :airports do |t|
      t.timestamps null: false
    end
  end
end
