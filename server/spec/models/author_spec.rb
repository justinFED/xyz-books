require 'rails_helper'

RSpec.describe Author, type: :model do
  describe 'validations' do
    it 'requires first name' do
      author = Author.new(last_name: 'Doe')
      expect(author).not_to be_valid
      expect(author.errors[:first_name]).to include("can't be blank")
    end

    it 'requires last name' do
      author = Author.new(first_name: 'John')
      expect(author).not_to be_valid
      expect(author.errors[:last_name]).to include("can't be blank")
    end
  end

  describe 'associations' do
    it 'has many books' do
      association = described_class.reflect_on_association(:books)
      expect(association.macro).to eq :has_many
    end
  end

  describe 'methods' do
    it 'returns full name' do
      author = Author.new(first_name: 'John', last_name: 'Doe')
      expect(author.full_name).to eq 'John Doe'
    end

    it 'returns full name with middle name' do
      author = Author.new(first_name: 'John', middle_name: 'Adam', last_name: 'Doe')
      expect(author.full_name).to eq 'John Adam Doe'
    end
  end
end
