import { Component, OnInit } from '@angular/core';
import { Room } from '../models/room';
import { RoomReservationService } from '../services/room-reservation.service';

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.css']
})
export class RoomListComponent implements OnInit {
  rooms!: Room[];
  tataprix:any;
  constructor(rs: RoomReservationService) {
    rs.getRooms().subscribe(data => {
      this.rooms=data
    })
  }

  ngOnInit(): void {
  }

  tata(room:any){
    console.log(room)
    this.tataprix = room.price
  }

}
