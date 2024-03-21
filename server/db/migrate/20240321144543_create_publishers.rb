class CreatePublishers < ActiveRecord::Migration[7.1]
  def change
    create_table :publishers do |t|
      t.string :name, null: false  # Defines a column named 'name' of type string. The 'null: false' option ensures that a name must be provided for each publisher.
      t.timestamps  # Automatically adds 'created_at' and 'updated_at' columns to store timestamps for record creation and update.
    end  # Ends the 'create_table' block.
  end  # Ends the 'change' method.
end  # Ends the migration class definition.
