import $ from 'jquery';
import Customer from './Customer';

class Manager extends Customer {
  constructor(user) {
    super(user, true)
      this.availableRooms = [];
      this.occupiedRooms = [];
      this.roomsBookedToday = [];
  };

  // getAvailableRoomsToday() {
  //
  //   this.rooms.forEach(room => {
  //     this.bookings.forEach(booking => {
  //       if (booking.roomNumber === room.number && booking.date === this.todaysDate) {
  //         this.roomsBookedToday.push(room);
  //       };
  //     });
  //   });
  //
  //   this.rooms.forEach(room => {
  //     this.bookings.forEach(booking => {
  //       if (!this.roomsBookedToday.includes(room) && !this.availableRooms.includes(room)) {
  //         this.availableRooms.push(room);
  //       }
  //     })
  //   });
  //   return this.availableRooms;
  // };
  //
  // getTotalRevenueToday() {
  //   return this.rooms.reduce((totalRevenue, room) => {
  //     this.bookings.forEach(booking => {
  //       if (booking.date === this.todaysDate && room.number === booking.roomNumber) {
  //         totalRevenue += room.costPerNight;
  //       };
  //     });
  //     return totalRevenue;
  //   }, 0);
  // };
  //
  // getPercentageOfRoomsOccupiedToday() {
  //   return this.roomsBookedToday.length * 100 / this.rooms.length;
  // };

};

export default Manager;
