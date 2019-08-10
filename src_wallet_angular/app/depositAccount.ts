import {Account} from "./models/Account";
import { Component } from "@angular/core";
import { DepositAndWithdraw } from "./models/DepositAndWithdraw";
import {EmployeeService} from './app.employeeService';

@Component({
    selector:'deposit',
    templateUrl:'deposit.html'
})



export class DepositAccountComponent{
    constructor(private service:EmployeeService){}
    model:DepositAndWithdraw=
    {
        id:0,
        amount:0
    }
    deposit()
    {
        this.service.deposit(this.model).subscribe(
            res=>console.log(res)
        )
      alert("Amount Deposit Successful !");
    }
}
