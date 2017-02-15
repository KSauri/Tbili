class User < ActiveRecord::Base
  attr_reader :password

  after_initialize :ensure_session_token

  validates :password_digest,
    :l_name,
    :f_name,
    presence: true
  validates :username,
    :session_token,
    :email,
    presence: true,
    uniqueness: true
  validates :password,
    length: { minimum: 7, allow_nil: true }

  # TODO include associations

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    return nil unless user
    user.is_password?(password) ? user : nil
  end

  def self.generate_session_token
    SecureRandom::urlsafe_base64(32)
  end

  def reset_session_token!
    self.session_token = User.generate_session_token
    self.save!
    self.session_token
  end

  def is_password?(submitted_password)
    BCrypt::Password.new(self.password_digest).is_password?(submitted_password)
  end

  def password=(new_password)
    @password = new_password # use User validations for password length
    self.password_digest = BCrypt::Password.create(new_password)
  end

  private

  def ensure_session_token
    self.session_token ||= User.generate_session_token
  end

end
