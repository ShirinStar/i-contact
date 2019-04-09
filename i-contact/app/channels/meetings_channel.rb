class MeetingsChannel < ApplicationCable::Channel
  def subscribed
     stream_from 'meetings'
end
