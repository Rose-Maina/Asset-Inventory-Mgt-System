class UserAssetsController < ApplicationController

    def index
        userassets = UserAsset.all
        render json: userassets, status: :ok
    end

    def show
        userasset = UserAsset.find_by(id: params[:id])
        render json: userasset, status: :ok
    end

    def create
        userasset = UserAsset.create!(user_asset_params)
        render json: userasset, status: :created
    end

    def update
        userasset = UserAsset.find_by(id: params[:id])
        if asset
            userasset.update!(user_asset_params)
            render json: userasset, status: :created
        else
            render json: {error: "userasset not found"}, status: :not_found
        end 
    end

    def destroy
        userasset = Asset.find_by(id: params[:id])
        if userasset
            userasset.destroy
            head :no_content
        else 
            render json: {error: "userasset not found"}, status: :not_found
        end
    end
    
    private
    
    def asset_params
        params.permit(:asset_id, :user_id)
    end

    def user_asset_params
        params.permit(:asset_id, :user_id)
    end
end
