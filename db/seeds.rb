Plane.destroy_all
p1 = Plane.create :name => "plane1", :rows => 6, :columns => 8
p2 = Plane.create :name => "plane2", :rows => 4, :columns => 6
p3 = Plane.create :name => "plane3", :rows => 4, :columns => 10

Flight.destroy_all
f1 = Flight.create :origin => "Sydney", :destination => 'London'
f2 = Flight.create :origin => "Sydney", :destination => 'Los Angeles'
f3 = Flight.create :origin => "Los Angeles", :destination => 'Sydney'
f4 = Flight.create :origin => "London", :destination => 'Sydney'

p1.flights << f1 << f4
p2.flights << f2 << f3

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
