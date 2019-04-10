class LocationsController < ApplicationController

def index
  @location= Location.all
  render json: @Location
end

def show
  # @user = User.find(params[:id])
  @location = Location.all
  render json: @location, status: :ok
end

def new
  @location = Location.new
end

  def create
    location = Location.new(location_params)
    # currenly hardcoding for testing
    location.user = User.find(1)
    # location.user = current_user
    if location.save
      ActionCable.server.broadcast 'locations_channel',
       lat: location.lat,
       lng: location.lng
       # user: location.user.name
       render json: @location, status: :ok
     head :ok
   end
 end

    # else
    #   redirect_to reviews_path
    # end

  private

  def current_user
    # currenly hardcoding for testing
    User.find(1)
  end

    def location_params
      params.require(:location).permit(:lat, :lng)
    end
  end
