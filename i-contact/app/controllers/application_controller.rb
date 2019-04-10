class ApplicationController < ActionController::API
  include Knock::Authenticable
  def current_user
    return unless session[:user_id]
    @current_user ||= User.find(session[:user_id])
  end
end
