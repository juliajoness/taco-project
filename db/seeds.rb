# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

Order.destroy_all
Taco.destroy_all
User.destroy_all

u1 = User.create(username: "Kenny1", email: "kenny1@lovetaco.com", password: "kenny123")
u2 = User.create(username: "Chef2", email:"chef2@lovetaco.com", password: "chef123")
u3 = User.create(username: "Eric3", email: "eric3@lovetaco.com", password: "eric123")
u4 = User.create(username: "Stan4", email: "stan4@lovetaco.com", password: "stan123")
u5 = User.create(username: "Adam5", email: "adam5@lovetaco.com", password: "adam123")

puts "Users done"

t1 = Taco.create(taco_name: "Holy Guacamole!!!", ingredients: "Guacamole, tortilla, pinto beans, cheese, lettuce, sour cream", price: 12)
t2 = Taco.create(taco_name: "Taco Tornado", ingredients: "Carnitas, carne asada, pollo, chorizo, al pastor, black beans, rice", price: 15)
t3 = Taco.create(taco_name: "The Burrito Bus", ingredients: "Corn tortilla, cheese, corn, cheese sauce, mango, pineapple salsa, black beans", price: 9)
t4 = Taco.create(taco_name: "Captain Jack Taco", ingredients: "Beer battered octupus, ceviche, green salsa", price: 17)
t5 = Taco.create(taco_name: "Wannabe Taco", ingredients: "A number 1 supreme from Taco Bell™", price: 3)

puts "Tacos done"

Order.create(time: 11, taco_id: t1.id, user_id: u1.id)
Order.create(time: 3, taco_id: t4.id, user_id: u2.id)
Order.create(time: 7, taco_id: t3.id, user_id: u3.id)
Order.create(time: 5, taco_id: t2.id, user_id: u4.id)
Order.create(time: 1, taco_id: t5.id, user_id: u5.id )

puts "Seeding done"