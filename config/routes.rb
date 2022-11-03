Rails.application.routes.draw do
  resources :requests
  resources :users
  resources :assets
  resources :departments
  resources :categories

  get '/home', to: 'application#home'
  get '/admin', to: 'application#admin' 
  get '/manager', to: 'application#manager'
  get '/finance', to: 'application#finance'


  # post "/signup", to: "users#create"
  # get "/me", to: "users#show"
  # post "login", to: "sessions#create"
  # delete "logout", to: "sessions#destroy"

  post '/login', to: 'application#login'
  post '/logout', to: 'application#logout'  


  
#   get '*path',
#       to: 'fallback#index',
#       constraints: ->(req) { !req.xhr? && req.format.html? }
# end
end