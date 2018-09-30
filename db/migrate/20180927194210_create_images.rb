class CreateImages < ActiveRecord::Migration[5.2]
  def change
    create_table :images do |t|
      t.string :public
      t.belongs_to :project, foreign_key: true

      t.timestamps
    end
  end
end
