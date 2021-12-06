import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Bookmyoffice, BookmyofficeService } from '../service/Bookmyoffice.service';
import { DashboardService } from '../service/Dashboard.service';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {

  constructor(private router:Router,private bser:BookmyofficeService,private dash:DashboardService) { }
  empid=0
  bookmy:Bookmyoffice[]=[]

  ngOnInit(): void {

    this.empid=JSON.parse( sessionStorage.getItem("Id")||'{}')
    this.refresh(this.empid)
    
  }

  logOut()
  {
    sessionStorage.clear(); 
    this.router.navigate(['']);
    
  }

  del(bookingId:Number,date:string)
  {
     this.bser.deleteBooking(bookingId).subscribe(
      Response=>{
        this.dash.addseats(date).subscribe(Response=>{
          this.refresh(this.empid)  
        })
    

      }   
     );
     
  }

  refresh(id:Number)
  {
    this.bser.retrieveDetails(id).subscribe(
      data=>{this.bookmy=data
      console.log(data);
      });

  }

}
