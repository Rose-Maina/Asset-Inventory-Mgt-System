class RequestSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :quantity, :urgency, :request_type
  has_one :asset
  has_one :user
end
