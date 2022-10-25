class CategoriesController < ApplicationController

    def index
        categories = Category.all
        render json: categories, status: :ok
    end

    def show
        category = Category.find_by(id: params[:id])
        render json: category, status: :ok
    end

    def create
        category = Category.create!(category_params)
        render json: category, status: :created
    end

    def update
        category = Category.find_by(id: params[:id])
        if category
            category.update!(category_params)
            render json: category, status: :created
        else
            render json: {error: "category not found"}, status: :not_found
        end 
    end

    def destroy
        category = Category.find_by(id: params[:id])
        if category
            category.destroy
            head :no_content
        else 
            render json: {error: "category not found"}, status: :not_found
        end
    end
    private
    def category_params
        params.permit(:name)
    end

end
