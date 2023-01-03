class AddImageToTacos < ActiveRecord::Migration[7.0]
  def change
    add_column :tacos, :image, :string
  end
end
