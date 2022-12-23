class OrdersController < ApplicationController
    def index 
        render json: Order.all 
    end

    def create
        order_new = Order.create(new_order_params)
        if order_new.valid?
            render json: order_new.taco
        else
            render json: {"errors": "order not found"}
        end
    end

    private

    def new_order_params
        params.permit(:time, :taco_id, :user_id)
    end
end
