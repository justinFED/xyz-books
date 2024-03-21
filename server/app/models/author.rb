class Author < ApplicationRecord
    has_many :books, through: :book_authors
    validates :first_name, :last_name, presence: true
   
  end