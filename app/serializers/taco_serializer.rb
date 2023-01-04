class TacoSerializer < ActiveModel::Serializer
  attributes :id, :taco_name, :ingredients, :price, :image
end
