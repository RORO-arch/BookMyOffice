import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from './employee.service';

export class Bookmyoffice{
  constructor(public bookingId:any,public managerId:Number,
    public employee:Employee,public bookingDate:string,public floorId:any,public portId:any,public deskId:any ){}
}

@Injectable({
  providedIn: 'root'
})
export class BookmyofficeService {

constructor(private Http:HttpClient) { }

addslot(bookmyoffice:Bookmyoffice){
  const headers = { 'content-type': 'application/json'}
  const body = JSON.stringify(bookmyoffice)
  return this.Http.post<Bookmyoffice>('http://localhost:8080/addslot',body,{'headers':headers});
}

deleteBooking(id:Number){
  return this.Http.delete<void>(`http://localhost:8080/deleteslot/${id}`);
}

retrieveDetails(id:Number){
  return this.Http.get<Bookmyoffice[]>(`http://localhost:8080/details/${id}`);
}

bookinginfo(id:Number,date:string)
{
  return this.Http.get<Bookmyoffice>(`http://localhost:8080/bookinginfo/${id}/${date}`);
}


}
