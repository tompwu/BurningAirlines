 # I reckon we need a flight between sydney & london, sydney & los angeles every day for a month

Plane.destroy_all
p1 = Plane.create :name => "plane1", :rows => 6, :columns => 8
p2 = Plane.create :name => "plane2", :rows => 4, :columns => 6
p3 = Plane.create :name => "plane3", :rows => 4, :columns => 10

Airport.destroy_all
a1 = Airport.create :name => 'Sydney'
a2 = Airport.create :name => 'London'
a3 = Airport.create :name => 'Los Angeles'


Flight.destroy_all
f1 = Flight.create :date_time => "2016-05-13 08:30:00", :destination => a1, :origin => a3
f2 = Flight.create :date_time => "2016-05-13 16:30:00", :destination => a2, :origin => a1

f3 = Flight.create :date_time => "2016-05-13 07:00:00", :destination => a1, :origin => a2
f4 = Flight.create :date_time => "2016-05-13 22:00:00", :destination => a3, :origin => a1

f5 = Flight.create :date_time => "2016-05-13 06:30:00", :destination => a1, :origin => a3
f6 = Flight.create :date_time => "2016-05-13 014:00:00", :destination => a1, :origin => a2

f7 = Flight.create :date_time => "2016-05-13 12:00:00", :destination => a3, :origin => a1
f8 = Flight.create :date_time => "2016-05-13 15:30:00", :destination => a2, :origin => a1

f9 = Flight.create :date_time => "2016-05-13 02:30:00", :destination => a1, :origin => a3
f10 = Flight.create :date_time => "2016-05-13 12:30:00", :destination => a2, :origin => a1

f11 = Flight.create :date_time => "2016-05-13 03:30:00", :destination => a1, :origin => a2
f12 = Flight.create :date_time => "2016-05-13 15:00:00", :destination => a2, :origin => a1

f13 = Flight.create :date_time => "2016-05-13 05:30:00", :destination => a1, :origin => a2
f14 = Flight.create :date_time => "2016-05-13 13:30:00", :destination => a3, :origin => a1

f15 = Flight.create :date_time => "2016-05-13 08:30:00", :destination => a2, :origin => a1
f16 = Flight.create :date_time => "2016-05-13 11:00:00", :destination => a1, :origin => a3

f17 = Flight.create :date_time => "2016-05-13 07:00:00", :destination => a3, :origin => a1
f18 = Flight.create :date_time => "2016-05-13 15:00:00", :destination => a2, :origin => a1

f19 = Flight.create :date_time => "2016-05-13 12:30:00", :destination => a1, :origin => a2
f20 = Flight.create :date_time => "2016-05-13 22:30:00", :destination => a3, :origin => a1

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
