import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
export class Dashboard
{
  constructor(public bookingDate:String ,public totalSeats:Number,public seatsAvailable:Number){}
}
@Injectable({
  providedIn: 'root'
})
export class DashboardService {

constructor(private Http:HttpClient) { }

remainingseats(date:String)
  {
    return this.Http.get<Dashboard>(`http://localhost:8080/seats/${date}`);
 
  }

  updateseats(date:String)
  {
    return this.Http.put<void>(`http://localhost:8080/updateseats/${date}`,{});
 
  }

  addseats(date:String)
  {
    return this.Http.put<void>(`http://localhost:8080/addseats/${date}`,{});
 
  }


}
