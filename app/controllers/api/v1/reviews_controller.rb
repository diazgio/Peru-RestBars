module Api
  module V1
    class ReviewsController < ApplicationController
      protect_from_forgery with: :null_session
      def create
        review = restaurant.reviews.new(review_params)

        if review.save
          render json: ReviewSerializer.new(review).serialized_json
        else
          render json: { error: review.errors.message }, status: 422
        end
      end

      def destroy
        review = Review.find_by(params[:id])

        if review.destroy
          render :no_content
        else
          render json: { error: review.errors.message }, status: 422
        end
      end

      def restaurant
        @restaurant ||= Restaurant.find(params[:restaurant_id])
      end
      
      private
      def review_params
        params.require(:review).permit(:title, :description, :score, :restaurant_id)
      end
    end
  end
end