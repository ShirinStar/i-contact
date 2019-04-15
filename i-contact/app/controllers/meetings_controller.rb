class MeetingsController < ApplicationController

def index
  @meeting = Meeting.all
  render json: @meeting
end

  def create
    @meeting = Meeting.new(meeting_params)
    @meeting.save!
      ActionCable.server.broadcast 'meetings_channel',
      id: @meeting.id,
      is_occur: @meeting.is_occur
     p 'creating meeting'
     head :ok
 end

 def update
   @meeting = Meeting.find(params[:id])
   @meeting.update(meeting_params)
   ActionCable.server.broadcast 'meetings_channel',
     id: @meeting.id,
     lat: @meeting.lat,
     lng: @meeting.lng
   p 'update meeting'
   head :ok
 end

  private

    def meeting_params
      params.require(:meeting).permit(:is_occur, :lat, :lng)
    end
  end
