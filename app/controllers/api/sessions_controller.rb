class Api::SessionsController < ApplicationController

  def create
    # debugger
    @user = User.find_by_credentials(
    user_params[:username],
    user_params[:password]
    )
    if @user
      login(@user)
      render "api/users/show"
    else
      # debugger
      render(
      json: { base: ["Invalid username or password"] },
      status: 401
      )
    end
  end

  def destroy
    @user = current_user
    if @user
      logout
      render "api/users/show"
    else
      render(
      json: ["No one is signed in"],
      status: 404
      )
    end
  end

end
