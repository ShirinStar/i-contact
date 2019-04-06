class User < ApplicationRecord
  has_many :reviewers, through :reviews
  has_many :reviewees, through :reviews

end
