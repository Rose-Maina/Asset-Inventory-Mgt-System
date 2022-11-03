class UserAssetSerializer < ActiveModel::Serializer
  attributes :id, :asset_id, :user_id
  has_one :asset
  has_one :user
end
