class CreateHumen < ActiveRecord::Migration[5.2]
  def change
    create_table :humen do |t|
      t.string :name, null: false
      t.string :email, null: false
      t.string :password_diagest, null: false

      t.timestamps
    end
  end
end
