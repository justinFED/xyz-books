class Book < ApplicationRecord
    belongs_to :publisher
    has_many :authors

    def self.valid_isbn13?(isbn)
        isbn =~ /\A\d{3}([-]\d{1})?\d{4}([-]\d{1})?\d{4}\z/
      end
end
