module ReviewService
  class Create < ReviewService::Base
    class << self
      def call(attributes:, user:)
        return unauthorized unless user

        Review.transaction do
          review = user.reviews.new(review_params(attributes))
          if review.save
            review.restaurant.calculate_average
            review.postgresql_json_response
          else
            { message: 'failure', errors: review.errors.messages, code: 422 }
          end
        end
      end
    end
  end
end