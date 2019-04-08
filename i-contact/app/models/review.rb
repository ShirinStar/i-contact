class Review < ApplicationRecord
  belongs_to :written_reviews, class_name: "User"
  belongs_to :received_reviews, class_name: "User"
end
