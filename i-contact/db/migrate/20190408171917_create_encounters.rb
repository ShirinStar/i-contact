class CreateEncounters < ActiveRecord::Migration[5.2]
  def change
    create_table :encounters do |t|
      t.boolean :is_occuer
      t.references :human, foreign_key: true
      t.references :rate, foreign_key: true

      t.timestamps
    end
  end
end
