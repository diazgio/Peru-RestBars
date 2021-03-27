module Api
  module V1
    class RestaurantsController < ApplicationController
      include Authable
      before_action :authenticate, only: %i[create update destroy]

      # GET /api/v1/restaurants
      def index
        render json: serializer(restaurants, options)
      end
      
      # GET /api/v1/restaurants/:slug
      def show
        render json: serializer(restaurant, options)
      end

      # POST /api/v1/restaurants
      def create
        restaurant = Restaurant.new(restaurant_params)

        if restaurant.save
          render json: serializer(restaurant)
        else
          render json: errors(restaurant), status: 422
        end
      end

      # PATCH /api/v1/restaurants/:slug
      def update
        restaurant = Restaurant.find_by(slug: params[:slug])
        if restaurant.update(restaurant_params)
          render json: serializer(restaurant, options)
        else
          render json: errors(restaurant), status: 422
        end
      end

      # DELETE /api/v1/restaurants/:slug
      def destroy
        if restaurant.destroy
          head :no_content
        else
          render json: errors(restaurant), status: 422
        end
      end

      private

      # Used For compound documents with fast_jsonapi
      def options
        @options ||= { include: %i[reviews] }
      end

      # Get all restaurants
      def restaurants
        @restaurants ||= Restaurant.includes(reviews: :user).all
      end

      # Get a specific restaurant
      def restaurant
        @restaurant ||= Restaurant.includes(reviews: :user).find_by(slug: params[:slug])
      end

      # Strong params
      def restaurant_params
        params.require(:restaurant).permit(:name, :image_url)
      end

      # fast_jsonapi serializer
      def serializer(records, options = {})
        RestaurantSerializer
          .new(records, options)
          .serialized_json
      end

      # Errors
      def errors(record)
        { errors: record.errors.messages }
      end
    end
  end
end
