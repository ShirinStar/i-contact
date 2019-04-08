class Human < ApplicationRecord
  has_many :encounters
  has_many :rates, through: :encounters 
end
