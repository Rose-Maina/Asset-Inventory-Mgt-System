class CreateAssets < ActiveRecord::Migration[7.0]
  def change
    create_table :assets do |t|
      t.string :name
      t.string :image
      t.references :category, null: false, foreign_key: true

      t.timestamps
    end
  end
end
