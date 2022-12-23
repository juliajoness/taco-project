class UsersController < ApplicationController
    def index 
        render json: User.all 
    end

    def show 
        user_found = User.find_by(id: params[:id])
        render json: user_found
    end

    def create
        user_new = User.create(new_user_params)
        if user_new.valid?
            render json: user_new.order
        else
            render json: {"errors": "user not found"}
        end
    end

    private

    def new_user_params
        params.permit(:time, :taco_id, :user_id)
    end
end
