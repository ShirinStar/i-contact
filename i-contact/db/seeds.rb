# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

bart = User.create!(name:'Bart Simpson', email:'bart@gmail.com', password_digest: '123')
think = Review.create!(rating: 4)
Meeting.create!(is_occur: true, user: bart, review: think)
Location.create!(lat: 40.00000, lng: -70.0000, user: bart)
