class CreateTacos < ActiveRecord::Migration[7.0]
  def change
    create_table :tacos do |t|
      t.string :taco_name
      t.string :ingredients
      t.integer :price

      t.timestamps
    end
  end
end
