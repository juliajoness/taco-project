class OrderSerializer < ActiveModel::Serializer
  attributes :id, :time
  has_many :tacos
end
