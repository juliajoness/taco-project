class UsersController < ApplicationController
    
rescue_from ActiveRecord::RecordNotFound, with: :user_not_found
rescue_from ActiveRecord::RecordInvalid, with: :user_unable_to_create

before_action :user_find_method, except: [:index, :create]
    
    def index
        users = User.all
        render json: users
    end

    def show 
        user_found = User.find_by(id: params[:id])
        render json: user_found
    end
    
    def create
        new_user = User.new(user_create_params)
        
        if new_user.valid?create
            new_user.save
            render json: new_user
        else
            render json: { error: new_user.errors.full_messages}
        end
    end

    def update
        user = User.find_by(id: params[:id])
        if user(user_update_params)
        # user.username = params[:username]
        # user.email = params[:email]
        # user.password = params[:password]
        # user.save
        render json: user
        else
            render json: { error: user.errors.full_messages}
        end
    end

    def destroy
        user = User.find(params[:id])
        user.destroy
        head :no_content
    end

    def createUser
        new_user = User.new(user_create_params)
        
        if new_user.valid?create
            new_user.save
            render json: new_user
        else
            render json: { error: new_user.errors.full_messages}
        end
    end
 
    private 

    def user_create_params
        params.permit(:username, :password, :email)
# if dont have wrap params
        # params.require(:user).permit(:username, :password, :email)
    end

    def user_update_params
        params.permit(:username, :password, :email)

    end

    def user_not_found
        render json: {error: "User Not Found"}
    end

    def user_unable_to_create( the_invalid_user_exception)
        # render json: {errors: the_invalid_user_exception}
        render json: {errors: the_invalid_user_exception.record.errors.full_messages}
    end

end
