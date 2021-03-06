Rails.application.routes.draw do
  post 'user_token' => 'user_token#create'

  # Serve websocket cable requests in-process
  mount ActionCable.server => '/cable'
  resources :reviews, param: :id  #maybe need to change to slug here and in controllers
  resources :meetings
  resources :locations
  resources :users do
    resources :locations
  end

end
