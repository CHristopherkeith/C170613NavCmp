Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'home#index'
#   map.root:controller => "home"
# map.connect ':controller/:action/:id'
# map.connect ':controller/:action/:id.:format '
match '/:controller(/:action(/:id.:format))',via: [:get,:post]
# match '/:controller(/:action(/:id.:format))',via: all
end
