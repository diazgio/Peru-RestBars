module Resettable
  extend ActiveSupport::Concern

  included do
    before_action :check_email, only: :reset
  end
  
  # TODO: Clean up this method
  def forgot_password
    user = User.find_by(email: params[:email])

    return render json: { error: 'Something went wrong.' }, status: 422 unless user

    user.generate_password_token!
    send_reset_password_email(user.email, user.reload.reset_password_token)

    render json: { success: true }, status: 204
  end
  
  # TODO: Clean up this method
  def reset_password
    user = User.find_by(reset_password_token: params[:token])

    return invalid_reset unless user&.password_token_valid?

    if user.reset_password!(params[:password])
      render json: { success: true }, status: 204
    else
      render json: { error: user.errors.full_messages }, status: 422
    end
  end

  private

  # Send the password reset email.
  # @param email [String]
  # @param token [String]
  #
  # @return [Nil]
  def send_reset_password_email(email, token)
    ResetPasswordWorker.perform_async(email, token)
  end

  def check_email
    render json: { error: 'Invalid email' }, status: 422 if params[:email].blank?
  end

  def invalid_reset
    render json: { error:  'The link has expired.' }, status: 404
  end
end
