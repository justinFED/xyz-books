require 'rails_helper'

RSpec.describe Book, type: :model do
  describe 'validations' do
    it 'requires title' do
      book = Book.new(isbn_13: '9781234567890', list_price: 10.99, publication_year: 2023, publisher_id: 1)
      expect(book).not_to be_valid
      expect(book.errors[:title]).to include("can't be blank")
    end

    it 'requires ISBN-13' do
      book = Book.new(title: 'Sample Book', list_price: 10.99, publication_year: 2023, publisher_id: 1)
      expect(book).not_to be_valid
      expect(book.errors[:isbn_13]).to include("can't be blank")
    end

  end

  describe 'associations' do
    it 'belongs to publisher' do
      association = described_class.reflect_on_association(:publisher)
      expect(association.macro).to eq :belongs_to
    end

    it 'has many authors' do
      association = described_class.reflect_on_association(:authors)
      expect(association.macro).to eq :has_many
    end
  end

  describe 'methods' do
  end
end
