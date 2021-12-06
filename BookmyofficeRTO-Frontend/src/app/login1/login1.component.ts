import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee, EmployeeService } from '../service/employee.service';

@Component({
  selector: 'app-login1',
  templateUrl: './login1.component.html',
  styleUrls: ['./login1.component.css']
})
export class Login1Component implements OnInit {

  constructor(private router:Router,private service:EmployeeService) { }

  ngOnInit(): void {
  }
  
  email=''
  password=''

  verified=1

  verify()
  {
    
    
    this.service.verifyEmail(this.email,this.password)
    .subscribe( 
        data=>{
                if(data===null)
                {
                    this.verified=0
                }  
                else
                {
                  sessionStorage.setItem('Id',data.empId)
                  this.router.navigate(['mainpage']);
    
                }       
        }
    ); 
  }

  
  
}

