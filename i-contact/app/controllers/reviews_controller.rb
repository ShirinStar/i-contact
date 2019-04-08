class ReviewsController < ApplicationController
  # before_action :authenticate_user!

  def index
    @user = User.find(params[:user_id])
    @reviews = Review.where(user_id: @user.id)
  end

  def show
    @user = User.find(params[:user_id])
    @reviews = Review.find(params[:id])
  end


    private

    def reviewer_params
      params.require(:review).permit(:rating)
    end
  end
