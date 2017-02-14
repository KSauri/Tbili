class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)

    if @user.save
      login(@user)
      render "api/users/show"
    else
      render json: @user.errors, status: 422
    end
  end

  # TODO update user info

  private

  def user_params
    params.require(:user).permit(:username,
      :email,
      :f_name,
      :l_name,
      :password,
      :image_url,
      :join_date,
      :location,
      :description)
  end

end
