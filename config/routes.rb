Rails.application.routes.draw do
  resources :orders, only: [:index, :create]
  resources :users, only: [:index, :show, :create]
  resources :tacos, only: [:index, :show, :create]
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
