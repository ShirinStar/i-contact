class MeetingsController < ApplicationController

  def create
    meeting = Meeting.new(meeting_params)
    meeting.user = current_user
    if meeting.save
      ActionCable.server.broadcast 'meetings',
       meeting: meeting.content,
       user: meeting.user.username
     head :ok
   end
 end

    else
      redirect_to reviews_path
    end
  end

  private

    def meeting_params
      params.require(:meeting).permit(:user_id)
    end
end
