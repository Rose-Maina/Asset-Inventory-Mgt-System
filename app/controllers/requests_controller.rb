class RequestsController < ApplicationController

    def index
        requests = Request.all
        render json: requests, status: :ok
    end

    def show
        request = Request.find_by(id: params[:id])
        render json: request, status: :ok
    end

    def create
        request = Request.create!(request_params)
        render json: request, status: :created
    end

    def update
        request = Request.find_by(id: params[:id])
        if request
            request.update!(request_params)
            render json: request, status: :created
        else
            render json: {error: "request not found"}, status: :not_found
        end 
    end

    def destroy
        request = Request.find_by(id: params[:id])
        if request
            request.destroy
            head :no_content
        else 
            render json: {error: "request not found"}, status: :not_found
        end
    end
    
    private
    
    def request_params
        params.permit(:name)
    end
end
