class Rate < ApplicationRecord
  has_many :encounters
  has_many :humen, through: :encounters
end
