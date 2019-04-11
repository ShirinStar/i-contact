class LocationsChannel < ApplicationCable::Channel
  def subscribed
     stream_from 'locations_channel'
     @location = Location.find_by(id: params[:markers])
     stream_for @location
   end

  def received(data)
    LocationsChannel.broadcast_to(@location,{location: @location,
      users: @location.waiting_users})
end

def speak(data)
   location = Location.create(body: data['location'])
   socket = { location: location.body }
   LocationsChannel.broadcast_to('locations_channel', socket)
 end

  def unsubscribed
 end
end
