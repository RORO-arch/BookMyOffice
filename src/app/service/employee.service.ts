import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export class Employee
{
   constructor(public empId:any, 
    public email:String ,
    public password:String , 
    public phoneNumber:String ,  
    public managerId:Number){}
}

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {


 constructor(private Http:HttpClient) { }

 verifyEmail(email:String,pass:String)
 {
    return this.Http.get<Employee>(`http://localhost:8080/login/${email}/${pass}`);
 }

 getmanagerid(id:Number)
 {
    return this.Http.get<Employee>(`http://localhost:8080/getmanagerid/${id}`);
 }

 getemployeedetails(id:Number)
 {
   return this.Http.get<Employee>(`http://localhost:8080/getemployee/${id}`);
 }
  

}
