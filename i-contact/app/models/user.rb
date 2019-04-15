class User < ApplicationRecord
  # has_many :meetings
  has_many :locations
  # has_many :reviews, through: :meetings
  has_secure_password
  validates :email, presence: true

  def to_token_payload
    {
      id: id,
      name: name,
      email: email
    }
  end
end
