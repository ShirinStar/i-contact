class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.integer :rating
      t.string :written_reviews
      t.string :references
      t.string :received_reviews
      t.string :references

      t.timestamps
    end
  end
end
