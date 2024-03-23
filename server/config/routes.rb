Rails.application.routes.draw do
  get '/books/convert/:isbn', to: 'books#convert_isbn', constraints: { isbn: /.*/ }

  get '/books/:isbn', to: 'books#show', constraints: { isbn: /\d{1}-\d{3}-\d{5}-\d{1}|[0-9X]{3}-[0-9X]{1,5}-[0-9X]{1,7}-[0-9X]{1,7}-\d|[0-9X]{1}-[0-9X]{3}-[0-9X]{5}-[0-9X]{1}/ }
end
