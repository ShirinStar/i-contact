# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
user1 = User.create(name:'david', email:'david@gmal.com', password_diagest: '123')
user2= User.create(name:'shirin', email:'shirin@gmail.com', password_diagest: '456')

user1.reviews.create!(rating: 1)
user2.reviews.create!(rating: 2)
