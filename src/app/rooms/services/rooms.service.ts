import { Injectable } from '@angular/core';
import { RoomList } from '../rooms';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {
  roomList: RoomList[] = [
    {
      roomNumber: 12,
      roomType: 'Deluxe room',
      amenities: 'air conditioning, free wifi, TV, bathrooms',
      price: 500,
      photos: 'images link',
      checkInTime: new Date('11- October-2022'),
      checkOutTIme: new Date('15-October-2022'),
      Rating: 4.78935983,
    },
    {
      roomNumber: 5,
      roomType: 'Deluxe rooms',
      amenities: 'air conditioning, free wifi, TV, bathrooms',
      price: 800,
      photos: 'images link',
      checkInTime: new Date('16- October-2022'),
      checkOutTIme: new Date('19-October-2022'),
      Rating: 4.597895825,
    },
    {
      roomNumber: 3,
      roomType: 'Private Room',
      amenities: 'air conditioning, free wifi, TV, bathrooms',
      price: 1100,
      photos: 'images link',
      checkInTime: new Date('11- October-2022'),
      checkOutTIme: new Date('15-October-2022'),
      Rating: 4.13853785,
    },
    {
      roomNumber: 4,
      roomType: 'Private Room',
      amenities: 'air conditioning, free wifi, TV, bathrooms',
      price: 1100,
      photos: 'images link',
      checkInTime: new Date('11- October-2022'),
      checkOutTIme: new Date('15-October-2022'),
      Rating: 4.13853785,
    },
  ];
  constructor() {
    console.log("Room service is initialized...");
   }

  getRooms() {
    return this.roomList;
  }


}
