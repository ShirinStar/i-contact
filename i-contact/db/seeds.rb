# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
bart = Human.create!(name:'Bart Simpson', email:'bart@gmail.com', password_diagest: '123')
think = Rate.create!(rating: 4)
Encounter.create!(is_occuer: true, human: bart, rate: think)
