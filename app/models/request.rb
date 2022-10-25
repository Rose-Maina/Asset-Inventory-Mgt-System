class Request < ApplicationRecord
  # has_one :asset
  belongs_to :asset
  belongs_to :user

  validates :title, :description, :quantity, :urgency, :request_type, :asset_id, :user_id, presence: true

  validates :urgency, inclusion: {in: %w(high medium low)}
  validates :request_type,  inclusion: {in: %w(new repair)}
end
