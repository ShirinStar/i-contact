class LocationsController < ApplicationController
   # before_action :authenticate_user

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
  user = User.find(params[:user_id])
  location = Location.where(user_id: user)
  if location.length > 0
    Location.update(location.last.id, location_params)
      ActionCable.server.broadcast 'locations_channel',
       lat: location.last.lat,
       lng: location.last.lng,
       user: location.last.user
       render json: @location, status: :ok
     head :ok
 else
   location = Location.new(location_params)
   user.locations << location
      ActionCable.server.broadcast 'locations_channel',
       lat: location.lat,
       lng: location.lng,
       user: location.user
       render json: @location, status: :ok
     head :ok
   end
 end

    # else
    #   redirect_to reviews_path
    # end

  private

  def location_params
      params.require(:location).permit(:lat, :lng, :user_id)
    end
  end
