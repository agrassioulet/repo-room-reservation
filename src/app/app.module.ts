import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReservationAddComponent } from './reservation-add/reservation-add.component';
import { ReservationListComponent } from './reservation-list/reservation-list.component';
import { RoomListComponent } from './room-list/room-list.component';
import { HomeComponent } from './home/home.component';
import { RoomAddComponent } from './room-add/room-add.component';
import { RoomDetailComponent } from './room-detail/room-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ReservationAddComponent,
    ReservationListComponent,
    RoomListComponent,
    HomeComponent,
    RoomAddComponent,
    RoomDetailComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
