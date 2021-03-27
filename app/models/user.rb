class User < ApplicationRecord
  has_secure_password

  has_many :reviews

  validates_presence_of :email
  validates_uniqueness_of :email

  def generate_password_token!
    self.update_columns(
      reset_password_token: generate_token,
      reset_password_sent_at: Time.current
    )
  end

  def password_token_valid?
    expires_at = self.reset_password_sent_at + 1.hour
    expires_at > Time.current
  end

  def reset_password!(password)
    self.update_columns(
      reset_password_token: nil,
      password: password
    )
  end

  private

  def generate_token
    SecureRandom.hex
  end
end
