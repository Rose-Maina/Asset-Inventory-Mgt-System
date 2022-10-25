class DepartmentsController < ApplicationController
    
    def index
        departments = Department.all
        render json: departments, status: :ok
    end

    def show
        department = Department.find_by(id: params[:id])
        render json: department, status: :ok
    end

    def create
        department = Department.create!(department_params)
        render json: department, status: :created
    end

    def update
        department = Department.find_by(id: params[:id])
        if department
            department.update!(department_params)
            render json: department, status: :created
        else
            render json: {error: "department not found"}, status: :not_found
        end 
    end

    def destroy
        department = Department.find_by(id: params[:id])
        if department
            department.destroy
            head :no_content
        else 
            render json: {error: "department not found"}, status: :not_found
        end
    end
    private
    def department_params
        params.permit(:name)
    end
end
