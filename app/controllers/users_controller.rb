class UsersController < ApplicationController
    def index
        users = User.all
        render json: users
    end

    def show 
        user_found = User.find_by(id: params[:id])
        render json: user_found
    end
    
    def create
        new_user = User.create( 
            username: params[:username],
            email: params[:email],
            
            password: params[:password],
        )
        render json: new_user
    end

    def update
        user = User.find_by(id: params[:id])
        user.username = params[:username]
        user.email = params[:email]
        user.password = params[:password]
        user.save
        render json: user
    end

    def destroy
        user = User.find(params[:id])
        user.destroy
        head :no_content
    end

end
