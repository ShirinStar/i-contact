class CreateMeetings < ActiveRecord::Migration[5.2]
  def change
    create_table :meetings do |t|
      t.boolean :is_occur
      t.references :user, foreign_key: true
      t.references :reviewer, foreign_key: true

      t.timestamps
    end
  end
end
