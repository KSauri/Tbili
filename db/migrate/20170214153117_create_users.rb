class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :username, null: false
      t.string :email, null: false
      t.string :f_name, null: false
      t.string :l_name, null: false
      t.string :password_digest, null: false
      t.string :session_token, null: false
      t.string :image_url
      t.date :join_date
      t.string :location
      t.text :description
    end
    add_index :users, :username
    add_index :users, :email
    add_index :users, :f_name
    add_index :users, :l_name
    add_index :users, :password_digest
    add_index :users, :session_token
  end
end
