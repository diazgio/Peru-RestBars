class AddAverageToRestaurants < ActiveRecord::Migration[6.0]
  def change
    add_column :restaurants, :average_score, :integer, default: 0
  end
end
