Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'
  namespace :api do
    resources :projects do 
      resources :images
    end 
  end
  get 'api/home_projects', to: 'api/projects#home_projects'
  post 'api/send_email', to: 'api/emails#send_email'

  #Do not place any routes below this one
  get '*other', to: 'static#index'
end
