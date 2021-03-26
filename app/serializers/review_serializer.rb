class ReviewSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :description, :score, :restaurant_id
end
