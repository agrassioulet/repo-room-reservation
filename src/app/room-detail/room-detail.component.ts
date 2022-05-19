import { Component, OnInit } from '@angular/core';
import { RoomReservationService } from '../services/room-reservation.service';
import { ActivatedRoute } from '@angular/router';
import { Room } from '../models/room';
import { FormsModule }   from '@angular/forms';

@Component({
  selector: 'app-room-detail',
  templateUrl: './room-detail.component.html',
  styleUrls: ['./room-detail.component.css']
})
export class RoomDetailComponent implements OnInit {
  room!: Room;

  constructor(private rs: RoomReservationService, private ar: ActivatedRoute) {
    var id = ar.snapshot.paramMap.get("id");
    if (id != null) {
      rs.getRoom(id).subscribe(data => {
         this.room = data
      })
    }
  }

  ngOnInit(): void {
  }

  updateRoom(form: any) {
    console.log(form.value)
    // this.newRoom={
    //   title:form.value.title,
    //   price:form.value.price,
    //   description:form.value.description,
    //   image_name:form.value.image_name,
    //   owner:{
    //     firstname:form.value.firstname_owner,
    //     lastname:form.value.lastname_owner
    //   }
    // }

    this.rs.updateRoom(this.room).subscribe(data => {
      console.log(data)
    })
   
    
  }



}
