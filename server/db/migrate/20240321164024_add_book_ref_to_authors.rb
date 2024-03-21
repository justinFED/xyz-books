class AddBookRefToAuthors < ActiveRecord::Migration[7.1]
  def change
    add_reference :authors, :book, foreign_key: true
  end
end