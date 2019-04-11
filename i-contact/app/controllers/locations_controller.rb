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
    location = Location.new(location_params)
    location.user = User.find(params[:user_id])
    if Location.find(params[:user_id]) == User.find(params[:user_id])
    location.update
      ActionCable.server.broadcast 'locations_channel',
       lat: location.lat,
       lng: location.lng,
       user: location.user
       render json: @location, status: :ok
     head :ok
   end
 else location.save
      ActionCable.server.broadcast 'locations_channel',
       lat: location.lat,
       lng: location.lng,
       user: location.user
       render json: @location, status: :ok
     head :ok
 end

    # else
    #   redirect_to reviews_path
    # end

  private

    def location_params
      params.require(:location).permit(:lat, :lng, :user_id)
    end
  end
