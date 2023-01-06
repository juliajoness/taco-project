Rails.application.routes.draw do
  resources :orders, only: [:index, :create]
  resources :users, only: [:index, :show, :create]
  resources :tacos, only: [:index, :show, :create]
  
  get "/orders", to: "orders#index"
  # get "/orders/:id", to: "orders#show"
  post "/orders", to: "orders#create"

  resources :users, except: [:index]
  post "/users", to: "users#create"

  get "/tacos", to: "tacos#index"
  get "/tacos/:id", to: "tacos#show"
  post "/tacos", to: "tacos#create"

  post "/login", to: "session#create"
  get "/userInSession", to: "session#get_logged_in_user"

  delete "/logout", to: "session#destroy"

  get "/profile", to: "profile#index"

end
