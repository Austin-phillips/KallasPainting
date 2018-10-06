Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'
  namespace :api do
    resources :projects do 
      resources :images
    end 
    resources :emails
  end
  get 'api/home_projects', to: 'api/projects#home_projects'

  #Do not place any routes below this one
  get '*other', to: 'static#index'
end
