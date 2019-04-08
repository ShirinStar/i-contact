class DropMeeting < ActiveRecord::Migration[5.2]
  def change
    drop_table :meetings
  end
end
