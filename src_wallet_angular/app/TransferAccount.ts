import {Account} from "./models/Account";
import { Component } from "@angular/core";
import { DepositAndWithdraw } from "./models/DepositAndWithdraw";
import {EmployeeService} from './app.employeeService';
import {TransferModel} from './models/TransferModel';

@Component({
    selector:'transfer',
    templateUrl:'transfer.html'
})
export class TransferAccountComponent{
    constructor(private service:EmployeeService){}
    model:TransferModel=
    {
        id1:0,
        id2:0,
        amount:0
    }
    transfer()
    {
        this.service.transfer(this.model).subscribe(
            res=>console.log(res)
        )
        alert("Amount Transfer Successfull !");
    }
}
