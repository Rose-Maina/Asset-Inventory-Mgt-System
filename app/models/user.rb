class User < ApplicationRecord
  has_secure_password

  has_many :requests
  belongs_to :department

  validates :name, :contact, :password, :department_id, presence: true
  validates :email, uniqueness: true
  validates :user_type, inclusion: {in: %w(Staff Procurement_Manager Finance Admin)}
end
