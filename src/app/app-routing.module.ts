import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ReservationAddComponent } from './reservation-add/reservation-add.component';
import { ReservationListComponent } from './reservation-list/reservation-list.component';
import { RoomAddComponent } from './room-add/room-add.component';
import { RoomDetailComponent } from './room-detail/room-detail.component';
import { RoomListComponent } from './room-list/room-list.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'all-rooms', component: RoomListComponent},
  {path:'all-reservations', component: ReservationListComponent},
  {path:'add-reservation', component: ReservationAddComponent},
  {path:'add-room', component: RoomAddComponent},
  {path:'detail-room/:id', component: RoomDetailComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
