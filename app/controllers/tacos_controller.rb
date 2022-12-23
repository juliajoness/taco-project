class TacosController < ApplicationController
    
    def index 
        render json: Taco.all 
    end

    def show 
        taco_found = Taco.find_by(id: params[:id])
        render json: taco_found
    end

    def create
        taco_new = Taco.create(new_taco_params)
        if taco_new.valid?
            render json: taco_new
        else
            render json: {"errors": "taco not found"}
        end
    end

    private

    def new_taco_params
        params.permit(:ingredients, :taco_name, :price)
    end
end
