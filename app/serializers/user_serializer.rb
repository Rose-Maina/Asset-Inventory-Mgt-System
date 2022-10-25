class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :contact, :user_type
  has_one :department
end
