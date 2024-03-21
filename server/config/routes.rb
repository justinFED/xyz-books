Rails.application.routes.draw do
  get 'books/:isbn', to: 'books#show', constraints: { isbn: /[\d-]+/ }, as: 'book_by_isbn'
end
