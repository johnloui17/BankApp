import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  ngOnInit(): void {
  }
  user=this.ds.currentUser;
amt='';
acno='';
pswd='';
amt1='';
acno1='';
pswd1='';
  constructor(private ds:DataService)
  {}
  deposit()
  {
    var acno=this.acno1;
    var pswd=this.pswd1;
    var amount=this.amt1;
    const result=(this.ds.deposit(acno,pswd,amount));
    if(result)
    {
alert(`Amount Rs.${amount} Sucessfully Deposited \nBalance: Rs.${this.ds.userDetails[acno]['balance']}.00`)
      var bal=this.ds.userDetails[acno]['balance'];
    }
  }
  withdraw()
  {
    var acno=this.acno;
    var pswd=this.pswd;
    var amount=this.amt;
    const result1=(this.ds.withdraw(acno,pswd,amount));
    if(result1)
    {
      alert(`Amount Rs.${amount} Sucessfully Withdrawn\nBalance: Rs.${this.ds.userDetails[acno]['balance']}.00`)
    }

  }

}
