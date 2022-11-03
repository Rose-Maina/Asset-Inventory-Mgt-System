class UserAsset < ApplicationRecord
  belongs_to :assets
  belongs_to :users
end
