class AssetsController < ApplicationController

    def index
        assets = Asset.all
        render json: assets, status: :ok
    end

    def show
        asset = Asset.find_by(id: params[:id])
        render json: asset, status: :ok
    end

    def create
        asset = Asset.create!(asset_params)
        render json: asset, status: :created
    end

    def update
        asset = Asset.find_by(id: params[:id])
        if asset
            asset.update!(edit_asset_params)
            render json: asset, status: :created
        else
            render json: {error: "asset not found"}, status: :not_found
        end 
    end

    def destroy
        asset = Asset.find_by(id: params[:id])
        if asset
            asset.destroy
            head :no_content
        else 
            render json: {error: "asset not found"}, status: :not_found
        end
    end
    
    private
    
    def asset_params
        params.permit(:name, :image, :category_id)
    end

    def edit_asset_params
        params.permit(:name, :image, :category_id)
    end


end
