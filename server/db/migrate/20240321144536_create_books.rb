class CreateBooks < ActiveRecord::Migration[7.1]
  def change
    create_table :books do |t|
      t.string :title, null: false
      t.string :isbn_13, null: false, unique: true
      t.decimal :list_price, null: false, precision: 10, scale: 2
      t.integer :publication_year, null: false
      t.string :edition
      t.string :image_url
      t.references :publisher, null: false, foreign_key: true

      t.timestamps
    end
  end
end
