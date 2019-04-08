class User < ApplicationRecord
  has_many :meetings
  has_many :reviews, through: :meetings 
end
