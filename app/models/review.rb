class Review < ApplicationRecord
  belongs_to :restaurant
  belongs_to :user
  
  after_commit -> (review) { review.restaurant.calculate_average }

  def postgresql_json_response
    as_json.merge(message: 'success', error: nil, code: 200)
  end
end
