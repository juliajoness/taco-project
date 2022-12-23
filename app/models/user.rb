class User < ApplicationRecord
    has_many :orders
    has_many :tacos, through: :orders
end
