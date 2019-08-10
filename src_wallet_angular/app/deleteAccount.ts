import {Account} from './models/Account';
import { Component } from "@angular/core";
import {EmployeeService} from './app.employeeService';

@Component({
    selector:'delete',
    templateUrl:'delete.html'
})

export class DeleteAccountComponent {

    id:number
    acc:Account
    constructor(private service:EmployeeService){}
    Delete()
    {
       this.service.delete(this.id).subscribe(
        res=>{this.acc=res
       },
       err=>{
           //alert("an error has occured")
       }

       )
       alert("Account Deleted !");
    }
    ch=false;
    change()
    {
        this.ch=true;
    }



}
