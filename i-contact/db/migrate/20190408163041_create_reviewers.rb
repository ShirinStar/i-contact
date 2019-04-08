class CreateReviewers < ActiveRecord::Migration[5.2]
  def change
    create_table :reviewers do |t|
      t.integer :rating

      t.timestamps
    end
  end
end
