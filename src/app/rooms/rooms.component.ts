import { AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnInit, QueryList, SkipSelf, ViewChild, ViewChildren} from '@angular/core';
import { Room, RoomList } from './rooms';
import { HeaderComponent } from '../header/header.component';
import { RoomsService } from './services/rooms.service';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],
})
export class RoomsComponent implements OnInit, DoCheck, AfterViewInit, AfterViewChecked {
  hotelName = 'Hilton Hotel';
  numberOfRooms = 10;
  hideRooms = false;
  selectedRoom!: RoomList;
  rooms: Room = {
    availableRooms: 10,
    bookedRooms: 5,
    totalRooms: 20,
  };
  title = 'Room List';

  roomList: RoomList[] = [];

  @ViewChild(HeaderComponent) headerComponent!: HeaderComponent;

  @ViewChildren(HeaderComponent) headerChildenComponent! : QueryList<HeaderComponent>;

// roomService = new RoomsService();

  constructor(@SkipSelf() private roomsService: RoomsService) {}

  ngOnInit(): void {
this.roomList = this.roomsService.getRooms();
    // console.log(this.headerComponent);

  }

  ngDoCheck(){
    console.log('on changes is called');
  }

  ngAfterViewInit() {
    this.headerComponent.title = "Rooms View";

    this.headerChildenComponent.last.title = "Last title";
    // this.headerChildenComponent.get()
  }

  ngAfterViewChecked() {
    
  }

  toggle() {
    this.hideRooms = !this.hideRooms;
    this.title = "Rooms List";
  }

  selectRoom(room: RoomList){
    this.selectedRoom = room;
  }

  addRoom() {
    const room: RoomList = {
      roomNumber: 4,
      roomType: 'Deluxe room',
      amenities: 'Air conditioning, WIFI, tv, jacuzzi, kitchen, balcony, swimming pool',
      price: 967,
      photos: "some photos",
      checkInTime: new Date('13-Oct-2022'),
      checkOutTIme: new Date('19-Oct-2022'),
      Rating: 4.686589,
    };

    // this.roomList.push(room);
    this.roomList = [...this.roomList, room];
  }
}
