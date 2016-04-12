 # I reckon we need a flight between sydney & london, sydney & los angeles every day for a month

Plane.destroy_all
p1 = Plane.create :name => "plane1", :rows => 6, :columns => 8
p2 = Plane.create :name => "plane2", :rows => 4, :columns => 6
p3 = Plane.create :name => "plane3", :rows => 4, :columns => 10

Flight.destroy_all
f1 = Flight.create :origin => "Sydney", :destination => 'London', :date_time => "2016-04-13 08:30:00"
f2 = Flight.create :origin => "Sydney", :destination => 'Los Angeles', :date_time => "2016-04-13 13:20:00"

f3 = Flight.create :origin => "Los Angeles", :destination => 'Sydney', :date_time => "2016-04-14 12:30:00"
f4 = Flight.create :origin => "London", :destination => 'Sydney', :date_time => "2016-04-14 18:00:00"

f5 = Flight.create :origin => "Los Angeles", :destination => "Sydney", :date_time => "2016-04-15 07:09:00"
f6 = Flight.create :origin => "Sydney", :destination => 'London', :date_time => "2016-04-15 15:09:00"

f7 = Flight.create :origin => "Sydney", :destination => "Los Angeles", :date_time => "2016-04-16 02:00:00"
f8 = Flight.create :origin => 'London', :destination => "Sydney", :date_time => "2016-04-16 07:09:00"

f9 = Flight.create :origin => "London", :destination => "Sydney", :date_time => "2016-04-17 07:30:00"
f10 = Flight.create :origin => 'Los Angeles', :destination => "Sydney", :date_time => "2016-04-17 23:00:00"

f9 = Flight.create :origin => 'Los Angeles', :destination => "Sydney", :date_time => "2016-04-18 07:30:00"
f10 = Flight.create :origin => "Sydney", :destination => "London", :date_time => "2016-04-18 23:00:00"

f11 = Flight.create :origin => "Sydney", :destination => "London", :date_time => "2016-04-19 07:30:00"
f12 = Flight.create :origin => 'Los Angeles"', :destination => "Sydney", :date_time => "2016-04-19 23:00:00"

f13 = Flight.create :origin => "Sydney", :destination => "Los Angeles", :date_time => "2016-04-20 06:30:00"
f14 = Flight.create :origin => 'London', :destination => "Sydney", :date_time => "2016-04-20 14:15:00"

f15 = Flight.create :origin => 'Los Angeles', :destination => "Sydney", :date_time => "2016-04-21 012:00:00"
f16 = Flight.create :origin => "Sydney", :destination => "London", :date_time => "2016-04-21 18:40:00"

f17 = Flight.create :origin => "London", :destination => "Sydney", :date_time => "2016-04-22 07:30:00"
f18 = Flight.create :origin => 'Los Angeles', :destination => "Sydney", :date_time => "2016-04-22 23:00:00"

f19 = Flight.create :origin => 'Los Angeles', :destination => "Sydney", :date_time => "2016-04-23 09:00:00"
f20 = Flight.create :origin => "Sydney", :destination => "London", :date_time => "2016-04-23 20:15:00"


p1.flights << f1 << f4 << f7 << f10 << f13 << f16 << f19
p2.flights << f2 << f3 << f8 << f11 << f14 << f17 << f20
p3.flights << f5 << f6 << f9 << f12 << f15 << f18


Reservation.destroy_all
r1 = Reservation.create :seat => '1A'
r2 = Reservation.create :seat => '1B'
r3 = Reservation.create :seat => '1C'
r4 = Reservation.create :seat => '2A'
r5 = Reservation.create :seat => '2B'

User.destroy_all
u1 = User.create :email => 'user1@ga.co', :password => 'chicken', :password_confirmation => 'chicken'
u2 = User.create :email => 'user2@ga.co', :password => 'chicken', :password_confirmation => 'chicken'
u3 = User.create :email => 'user3@ga.co', :password => 'chicken', :password_confirmation => 'chicken'
u4 = User.create :email => 'user4@ga.co', :password => 'chicken', :password_confirmation => 'chicken'
u5 = User.create :email => 'user5@ga.co', :password => 'chicken', :password_confirmation => 'chicken'

f1.reservations << r1 << r2 << r3
f2.reservations << r4 << r5

u1.reservations << r1
u2.reservations << r2
u3.reservations << r3
u4.reservations << r4
u5.reservations << r5
