import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { Room, RoomList } from '../rooms';

@Component({
  selector: 'app-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoomsListComponent implements OnInit, OnChanges, OnDestroy{
  
  @Input() rooms: RoomList[] = [];

  @Input() title: string = '';

  @Output() SelectedRoom = new EventEmitter<RoomList>();

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    if(changes['title']) {
      this.title = changes['title'].currentValue.toUpperCase();
    }
  }

  ngOnInit(): void {
    
  }
  selectRoom(room: RoomList){
    this.SelectedRoom.emit(room);
  }
  ngOnDestroy(){
    console.log('on destroy is called');
  }
}
