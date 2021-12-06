
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Bookmyoffice, BookmyofficeService } from '../service/Bookmyoffice.service';
import { DashboardService } from '../service/Dashboard.service';
import { Employee, EmployeeService } from '../service/employee.service';


@Component({
  selector: 'app-bookslot1',
  templateUrl: './bookslot1.component.html',
  styleUrls: ['./bookslot1.component.css']
})
export class Bookslot1Component implements OnInit {
 
  constructor(private bms:BookmyofficeService,private dash:DashboardService,private route:Router,private emps:EmployeeService) { }
  empid:Number
  dates:Date[]=[];
  emp:Employee=new Employee(null,'','','',0)
  book:Bookmyoffice=new Bookmyoffice(null,0,this.emp,'',0,0,0);

  curr:Date = new Date();
  len=0;
  seldate=" ";
  
  ngOnInit(): void {
    this.empid=JSON.parse( sessionStorage.getItem("Id")||'{}')
     this.emps.getemployeedetails(this.empid).subscribe(data=>
      {  
        this.book.employee=data;
        console.log(this.book)
      })
   
    while( this.len<7)
    {
       this.curr.setDate(this.curr.getDate()+1);
       
        
       if(this.curr.getDay()!==0 && this.curr.getDay()!==6)
       {
      
        this.dates.push(new Date(this.curr));
  
         this.len=this.len+1;
  
       }

    }

  }

  sel1()
  {
    //console.log(this.seldate)
    this.bms.bookinginfo(this.empid,this.seldate).subscribe(
      data=>{
        if(data===null)
        {
          console.log("Null")
          this.dash.remainingseats(this.seldate).subscribe(data=>
            {
               if(data.seatsAvailable===0)
               {
                 window.alert("No seats Available")
                 this.route.navigate(['mainpage'])
               }
               else{
                 this.dash.updateseats(this.seldate).subscribe(Response=>{
                  this.book.bookingDate=this.seldate    
                  this.book.managerId=this.book.employee.managerId
                  this.bms.addslot(this.book).subscribe(data=>
                    {
                      window.alert("Slot Booked")
                      this.route.navigate(['mainpage'])
                    })

                    })
               }
               
            })
        }
        else
        {
          window.alert("Already Booked")
          this.route.navigate(['mainpage'])
        }
      }
    )
    
  }
  

  
  
 

}
