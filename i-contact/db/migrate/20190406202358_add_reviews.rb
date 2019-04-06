class AddReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.integer :rating
      t.belongs_to :reviewer
      t.belongs_to :reviewee
      t.timestamps
      t.index [:reviewer_id, :reviewee_id], unique: true
    end
  end
end
