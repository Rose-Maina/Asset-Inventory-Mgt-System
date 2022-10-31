Rails.application.routes.draw do
  resources :requests
  resources :users
  resources :assets
  resources :departments
  resources :categories

  get '/home', to: 'application#home'
  get '/admin', to: 'application#admin'
  post '/login', to: 'application#login'
  post '/logout', to: 'application#logout'

  post '/login/admin', to: "clients#login_user"



  
#   get '*path',
#       to: 'fallback#index',
#       constraints: ->(req) { !req.xhr? && req.format.html? }
# end
end
