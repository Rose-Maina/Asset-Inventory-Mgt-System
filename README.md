#   Asset Inventory Management System

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...

### Models and Validations
Category:
    validates name, presence

Department:
    validates name, presence

Asset:
    validates name, image, category: presence

Request:
    validates title, description, quantity, urgency, request_type, asset_id, user_id: presence

    validates urgency, (includes high, medium, low)
        request_type: strict (includes new or repair)

User:
    validates name, email (unique), contact, user_type (Staff, Procurement Manager, Finance Dpt, Admin)
    , department_id: presence

### Relationships
Category: 
    has_many :assets

Department:
    has_many :users

Asset:
    has_many :requests
    belongs_to :category

Request: 
    has_one :asset
    belongs_to :user

User:
    has_many :requests
    belongs_to :department

