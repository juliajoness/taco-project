class Order < ApplicationRecord
  belongs_to :User
  belongs_to :Taco
end
