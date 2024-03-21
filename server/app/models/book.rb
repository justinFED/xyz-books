class Book < ApplicationRecord
  belongs_to :publisher
  has_many :book_authors, dependent: :destroy
  has_many :authors, through: :book_authors

  def self.valid_isbn13?(isbn)
    isbn =~ /\A\d{3}([-]\d{1})?\d{4}([-]\d{1})?\d{4}\z/
  end

  def self.valid_isbn10?(isbn)
    return false unless isbn.match?(/^\d{9}[\d|X]$/)

    sum = 0
    isbn[0..8].chars.each_with_index do |c, i|
      digit = c == 'X' ? 10 : c.to_i
      sum += digit * (10 - i)
    end
    check_digit = (11 - (sum % 11)) % 11
    check_digit == (isbn[-1] == 'X' ? 10 : isbn[-1].to_i)
  end

  def self.convert_to_isbn13(isbn_10)
    return nil unless valid_isbn10?(isbn_10)

    isbn_13_prefix = "978" + isbn_10[0..8]

    sum = 0
    isbn_13_prefix.chars.each_with_index do |c, i|
      digit = c == 'X' ? 10 : c.to_i
      weight = i.even? ? 1 : 3
      sum += digit * weight
    end
    check_digit = (10 - (sum % 10)) % 10

    isbn_13_prefix + check_digit.to_s
  end
end
