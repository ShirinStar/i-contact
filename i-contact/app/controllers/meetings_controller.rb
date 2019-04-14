class MeetingsController < ApplicationController

def index
  @meeting = Meeting.all
  render json: @meeting
end

  def create
      ActionCable.server.broadcast 'meetings_channel',
      is_occur: true
     p 'creating meeting'
     head :ok
 end

    # else
    #   redirect_to reviews_path
    # end

  private

    def meeting_params
      params.require(:meeting).permit(:is_occur)
    end
  end
