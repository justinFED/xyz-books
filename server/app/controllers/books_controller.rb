class BooksController < ApplicationController
  def show
    isbn = params[:isbn]
    
    book = Book.find_by(isbn_13: isbn) || Book.find_by(isbn_10: isbn)
    if book
      render_book_info(book)
    else
      render json: { message: "Book not found" }, status: :not_found
    end
  end
  
  
  
  private

  def valid_isbn10?(isbn)
    return false unless isbn.match?(/^\d{9}[\d|X]$/)
    
    digits = isbn.chars.map { |c| c == 'X' ? 10 : c.to_i }
    sum = digits.each_with_index.sum { |digit, index| digit * (10 - index) }
    sum % 11 == 0
  end
  
  def valid_isbn13?(isbn)
    return false unless isbn.match?(/^\d{13}$/)
    
    digits = isbn.chars.map(&:to_i)
    sum = digits.each_with_index.sum { |digit, index| index.even? ? digit : digit * 3 }
    sum % 10 == 0
  end
  
  def convert_to_isbn13(isbn_10)
    return unless valid_isbn10?(isbn_10)
    
    isbn_13_prefix = "978" + isbn_10[0..8]
    check_digit = isbn_13_prefix.chars.each_with_index.sum { |c, i| c.to_i * (i.even? ? 1 : 3) }
    check_digit = (10 - (check_digit % 10)) % 10
    isbn_13_prefix + check_digit.to_s
  end

  def render_book_info(book)
    authors = book.authors.map(&:full_name).join(', ')
    publisher_name = book.publisher&.name
  
    render json: {
      title: book.title,
      authors: authors,
      isbn_13: book.isbn_13,
      isbn_10: book.isbn_10,
      publication_year: book.publication_year,
      publisher: publisher_name,
      edition: book.edition,
      price: book.list_price
    }, status: :ok
  end
  
  
end
