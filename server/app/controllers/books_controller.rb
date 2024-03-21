class BooksController < ApplicationController
    def show
      isbn = params[:isbn_13]
  
      if Book.valid_isbn13?(isbn)
        book = Book.find_by(isbn_13: isbn)
        if book
          render json: book.as_json(include: :publisher), status: :ok
        else
          render json: { message: "Book not found" }, status: :not_found
        end
      else
        render json: { message: "Invalid ISBN format" }, status: :bad_request
      end
    end
  end