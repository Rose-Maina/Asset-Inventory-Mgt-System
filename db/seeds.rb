# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
puts "Seeding data..."
    categories = Category.create([
        { name: "Electronics" },
        { name: "Stationery" }
        ])
    departments = Department.create([
        { name: "Admin" },
        { name: "Procurement" },
        { name: "Finance" },
        { name: "Accounts" }
    ])
    assets = Asset.create([
        { name: "Laptop", image: "https://www.saruk.co.ke/images/43881665404534.jpg", category_id: 1 },
        { name: "Notebooks", image: "https://i.pinimg.com/736x/59/04/ed/5904ed97ba645be20ab1dc2570e5b3d4.jpg", category_id: 2}
    ])
    users = User.create([
        { name: "Bruce Wells", email: "admin@mail.com", password: "admin123", password_confirmation: "admin123", contact: '0743678901', user_type: 'Admin', department_id: 1  },
    ])
    

puts "Done Seeding"
