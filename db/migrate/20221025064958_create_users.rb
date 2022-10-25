class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.string :name
      t.string :email
      t.string :contact
      t.string :user_type
      t.references :department, null: false, foreign_key: true

      t.timestamps
    end
  end
end
