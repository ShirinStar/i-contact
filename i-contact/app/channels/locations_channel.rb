class LocationsChannel < ApplicationCable::Channel
  def subscribed
     stream_from 'locations_channel'
   end
end
