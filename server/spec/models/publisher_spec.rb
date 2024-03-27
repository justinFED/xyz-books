require 'rails_helper'

RSpec.describe Publisher, type: :model do
  describe 'validations' do
    it 'requires name' do
      publisher = Publisher.new
      expect(publisher).not_to be_valid
      expect(publisher.errors[:name]).to include("can't be blank")
    end
  end

  describe 'associations' do
    it 'has many books' do
      association = described_class.reflect_on_association(:books)
      expect(association.macro).to eq :has_many
    end
  end
end
