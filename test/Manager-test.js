import chai from 'chai';
import Manager from '../src/Manager';
import usersData from '../src/test-data/users-test-data';
import roomsData from '../src/test-data/rooms-test-data';
import bookingsData from '../src/test-data/bookings-test-data';
const expect = chai.expect;

let manager;
describe('Manager', () => {
  beforeEach(() => {
    manager = new Manager(usersData, roomsData, bookingsData);
   });

  it('should be a function', () => {
       expect(Manager).to.be.a('function');
   });

  it('should be an instance of Hotel', () => {
   expect(manager).to.be.an.instanceof(Manager);
  });

  it('should accept an array of all available rooms', () => {
    expect(manager.availableRoomsToday).to.be.a('array');
  });

  it('should accept an array of all occupied rooms', () => {
    expect(manager.occupiedRooms).to.be.a('array');
  });

  it('should return an array of available rooms for today\'s date', () => {
    expect(manager.getAvailableRoomsToday(roomsData.rooms, bookingsData.bookings)).to.be.a('array');
    // expect(manager.getAvailableRoomsToday(roomsData.rooms, bookingsData.bookings).length).to.equal(8);
  });

  it('should calculate the total revenue for today\'s date', () => {
    expect(manager.getTotalRevenueToday(roomsData.rooms, bookingsData.bookings)).to.be.a('string');
    // expect(manager.getTotalRevenueToday(roomsData.rooms, bookingsData.bookings)).to.eql('$1,215.11');
  });

  it('should calculate the percentage of rooms occupied for today\'s date', () => {
    manager.getAvailableRoomsToday(roomsData.rooms, bookingsData.bookings);
    expect(manager.getPercentageOfRoomsOccupiedToday(roomsData.rooms)).to.be.a('number');
    // expect(manager.getPercentageOfRoomsOccupiedToday(roomsData.rooms)).to.eql(33);
  });

});
