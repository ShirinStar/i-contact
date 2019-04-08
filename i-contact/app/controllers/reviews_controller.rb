class ReviewersController < ApplicationController
  # before_action :authenticate_user!

  def index
    @user = User.find(params[:user_id])
    @reviewers = Reviewer.where(user_id: @user.id)
  end

  def show
    @user = User.find(params[:user_id])
    @reviewers = Reviewer.find(params[:id])
  end


    private

    def reviewer_params
      params.require(:reviewer).permit(:rating)
    end
  end
