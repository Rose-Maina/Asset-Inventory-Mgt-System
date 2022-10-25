class Category < ApplicationRecord
    has_many :assets

    validates :name, presence: true
end
