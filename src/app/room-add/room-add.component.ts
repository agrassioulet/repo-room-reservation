import { Component, OnInit } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { Room } from '../models/room';
import { RoomReservationService } from '../services/room-reservation.service';


@Component({
  selector: 'app-room-add',
  templateUrl: './room-add.component.html',
  styleUrls: ['./room-add.component.css']
})
export class RoomAddComponent implements OnInit {

  constructor(private rs :  RoomReservationService) { }

  ngOnInit(): void {
  }

  addRoom(form: any) {
    console.log("begin addRoom")
    console.log("form.value")
    console.log(form.value)

    let newRoom:Room={
      "id": Date.now(),
      "title":form.value.title,
      "price":form.value.price,
      "description":form.value.description,
      "image_name":form.value.image_name,
      "owner":{
        "firstname":form.value.firstname_owner,
        "lastname":form.value.lastname_owner
      }
    }

    this.rs.createRoom(newRoom).subscribe(data => {
      console.log(data)
    })
    form.reset()
  }


}
