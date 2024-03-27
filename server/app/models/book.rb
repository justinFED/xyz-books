class Book < ApplicationRecord
  belongs_to :publisher
  has_many :book_authors, dependent: :destroy
  has_many :authors, through: :book_authors

  validates :title, presence: true
  validates :isbn_13, presence: true
end
