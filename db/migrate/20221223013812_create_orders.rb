class CreateOrders < ActiveRecord::Migration[7.0]
  def change
    create_table :orders do |t|
      t.integer :time
      t.belongs_to :User, null: false, foreign_key: true
      t.belongs_to :Taco, null: false, foreign_key: true

      t.timestamps
    end
  end
end
