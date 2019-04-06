class AddRevieweeCounterCacheToReviews < ActiveRecord::Migration[5.2]
  def change
    add_column :reviews, :reviewee_count, :integer, default: 0
  end
end
