class Restaurant < ApplicationRecord
  has_many :reviews
  validates :name, presence: true, length: { maximum: 255 }

  before_create -> (restaurant) do
    restaurant.slug = restaurant.name.parameterize
  end

  def calculate_average
    return 0 unless reviews.size.positive?

    avg = reviews.average(:score).to_f.round(2) * 100
    update_column(:average_score, avg)
  end
end
