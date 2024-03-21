class BooksController < ApplicationController
  def show
    isbn = params[:isbn]
    book = Book.find_by(isbn_13: isbn)

    if book
      render_book_info(book)
    else
      render json: { message: "Book not found" }, status: :not_found
    end
  end

  def convert_isbn
    isbn = params[:isbn]
    converted_isbn = if valid_isbn13?(isbn)
                      convert_to_isbn10(isbn)
                    elsif valid_isbn10?(isbn)
                      convert_to_isbn13(isbn)
                    else
                      return render json: { message: "Invalid ISBN" }, status: :bad_request
                    end

    render json: { converted_isbn: converted_isbn }, status: :ok
  end

  private

  def valid_isbn10?(isbn)
    return false unless isbn.match?(/^\d{1}-\d{3}-\d{5}-\d{1}$/)

    digits = isbn.delete('-').chars.map { |c| c == 'X' ? 10 : c.to_i }
    sum = digits.each_with_index.sum { |digit, index| digit * (10 - index) }
    sum % 11 == 0
  end

  def valid_isbn13?(isbn)
    isbn = isbn.delete('^0-9')
    return false unless isbn.match?(/^\d{13}$/)  
    
    digits = isbn.chars.map(&:to_i)
    sum = digits.each_with_index.sum { |digit, index| index.even? ? digit : digit * 3 }
    sum % 10 == 0
  end

  def convert_to_isbn13(isbn_10)
    return unless valid_isbn10?(isbn_10)
  
    isbn_13_prefix = "978" + isbn_10.delete('-')[1..-2]
    check_digit = isbn_13_prefix.chars.each_with_index.sum { |c, i| c.to_i * (i.even? ? 1 : 3) }
    check_digit = (10 - (check_digit % 10)) % 10
    isbn_13_prefix + check_digit.to_s
  end

  def convert_to_isbn10(isbn_13)
    return unless valid_isbn13?(isbn_13)
    
    isbn_10_prefix = isbn_13.delete('-')[3..11] 
    sum = 0
    isbn_10_prefix.chars.each_with_index do |c, i|
      sum += (10 - i) * c.to_i
    end
    check_digit = (11 - (sum % 11)) % 11
    check_digit = check_digit == 10 ? 'X' : check_digit.to_s
    isbn_10_prefix + check_digit.to_s
  end
  
  def render_book_info(book)
    authors = book.authors.map(&:full_name).join(', ')
    publisher_name = book.publisher ? book.publisher.name : nil

    render json: {
      title: book.title,
      authors: authors,
      isbn_13: book.isbn_13,
      isbn_10: book.isbn_10,
      publication_year: book.publication_year,
      publisher: { name: publisher_name },
      edition: book.edition,
      price: book.list_price
    }, status: :ok
  end
end
