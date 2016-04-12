class CreatePlanes < ActiveRecord::Migration
  def change
    create_table :planes do |t|
      t.text :name
      t.string :rows
      t.string :columns

      t.timestamps null: false
    end
  end
end
