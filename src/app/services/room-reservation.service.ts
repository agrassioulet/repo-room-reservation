import { HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Room } from '../models/room';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RoomReservationService {
  private rooms: Room[] = [];

  constructor(private http: HttpClient) {
  }


  public getRooms(): Observable<Room[]> 
  {
    const url = 'http://localhost:3000/rooms';
    return this.http.get<Room[]>(url);
  }

  public getRoom(id: string): Observable<Room> 
  {
    const url = 'http://localhost:3000/rooms/' + id;
    return this.http.get<Room>(url);
  }

  public createRoom(room:any): Observable <void>
  {
    return this.http.post<void>("http://localhost:3000/rooms",room)
  }
  
  public updateRoom(room:any): Observable <void>
  {
    return this.http.put<void>("http://localhost:3000/rooms/"+ room.id,room)
  }


}
