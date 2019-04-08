class User < ApplicationRecord
    # Reviews this user has written
  has_many :written_reviews, class_name: "Review", foreign_key: "written_reviews_id"
    # Reviews others have written about this user
  has_many :reviews, class_name: "Review", foreign_key: "received_reviews_id"
end
