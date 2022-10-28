class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :password, :contact, :user_type
  has_one :department
end
