Rails.application.routes.draw do
  get '/books/:isbn', to: 'books#show', as: 'book'
  get '/books/:isbn', to: 'books#show', constraints: { isbn: /\d{1}-\d{3}-\d{5}-\d{1}/ }
  get '/books/convert/:isbn', to: 'books#convert_isbn', constraints: { isbn: /.*/ }
end
