Rails.application.routes.draw do
  resources :requests
  resources :users
  resources :assets
  resources :departments
  resources :categories
  get '/hello', to: 'application#hello_world'


  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }
end
