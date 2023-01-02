Rails.application.routes.draw do
  resources :users
  resources :orders, only: [:index, :create]
  resources :users, only: [:index, :show, :create]
  resources :tacos, only: [:index, :show, :create]
  
  get "/orders", to: "orders#index"
  # get "/orders/:id", to: "orders#show"
  post "/orders", to: "orders#create"

  get "/users", to: "users#index"
  get "/users/:id", to: "users#show"
  post "/users", to: "users#create"
  delete "/users/:id", to: "users#delete"
  patch "/users/:id", to: "users#update"

  get "/tacos", to: "tacos#index"
  get "/tacos/:id", to: "tacos#show"
  post "/tacos", to: "tacos#create"


end
