# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

m1 = Metric.create({created_at: DateTime.now, updated_at: DateTime.now})
m2 = Metric.create({created_at: DateTime.now, updated_at: DateTime.now})
m3 = Metric.create({created_at: DateTime.now, updated_at: DateTime.now})

r1 = Region.create({created_at: DateTime.now, updated_at: DateTime.now})
r2 = Region.create({created_at: DateTime.now, updated_at: DateTime.now})
r3 = Region.create({created_at: DateTime.now, updated_at: DateTime.now})
