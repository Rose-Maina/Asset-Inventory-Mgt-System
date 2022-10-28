class UsersController < ApplicationController
    def index
        users = User.all
        render json: users, status: :ok
    end

    def show
        user = User.find_by(id: params[:id])
        render json: user, status: :ok
    end

    def create
        user = User.create!(user_params)
        render json: user, status: :created
    end

    def update
        user = User.find_by(id: params[:id])
        if user
            user.update!(user_params)
            render json: user, status: :created
        else
            render json: {error: "user not found"}, status: :not_found
        end 
    end

    def destroy
        user = User.find_by(id: params[:id])
        if user
            user.destroy
            head :no_content
        else 
            render json: {error: "user not found"}, status: :not_found
        end
    end
    
    private
    
    def user_params
        params.permit(:name, :email, :password, :password_confirmation, :contact, :user_type, :department_id, )
    end
end
