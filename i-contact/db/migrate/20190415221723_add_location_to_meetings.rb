class AddLocationToMeetings < ActiveRecord::Migration[5.2]
  def change
    add_column :meetings, :lat, :decimal
    add_column :meetings, :lng, :decimal
  end
end
