class MeetingsController < ApplicationController

def index
  @meeting = Meeting.all
  render json: @meeting
end

  def create
    meeting = Meeting.new(meeting_params)
    meeting.user = User.find(1)
    meeting.review = Review.find(1)
    # meeting.user = current_user
    if meeting.save
      ActionCable.server.broadcast 'meetings_channel',
       is_occur: meeting.is_occur
       # user: meeting.user.name
     head :ok
   end
 end

    # else
    #   redirect_to reviews_path
    # end

  private

  def current_user
    User.find(1)
  end

    def meeting_params
      params.require(:meeting).permit(:is_occur)
    end
  end
