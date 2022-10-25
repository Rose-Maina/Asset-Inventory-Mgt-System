class Asset < ApplicationRecord
  has_many :requests
  belongs_to :category

  validates :name, :image, :category, presence: true
end
