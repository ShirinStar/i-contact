class DropReviewers < ActiveRecord::Migration[5.2]
  def change
    drop_table :reviewers
  end
end
