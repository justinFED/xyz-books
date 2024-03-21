class CreateBookAuthors < ActiveRecord::Migration[7.1]
  def change
    create_table :book_authors, id: false do |t|
      t.belongs_to :book, foreign_key: :book_id
      t.belongs_to :author, foreign_key: :author_id
      t.index [:book_id, :author_id], unique: true
    end
  end
end