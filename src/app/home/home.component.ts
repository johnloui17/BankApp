import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
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
depositForm=this.fb.group({
  acno:['',[Validators.required,Validators.pattern('[0-9]*')]],
  pswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]],
  amt:['',[Validators.required,Validators.pattern('[0-9]*')]]
 })
 withdrawForm=this.fb.group({
  acno:['',[Validators.required,Validators.pattern('[0-9]*')]],
  pswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]],
  amt:['',[Validators.required,Validators.pattern('[0-9]*')]]
 })
  constructor(private ds:DataService,private fb:FormBuilder)
  {}
  deposit()
  {
if (this.depositForm.valid)

    {
      var acno=this.depositForm.value.acno;
    var pswd=this.depositForm.value.pswd;
    var amount=this.depositForm.value.amt;


    const result=(this.ds.deposit(acno,pswd,amount));
    if(result)
    {
      var bal=this.ds.userDetails[`${acno}`]['balance'];
    
alert(`Amount Rs.${amount} Sucessfully Deposited \nBalance: Rs.${bal}.00`)
    }
  }
  else
  {
    alert("Invalid Input");
  }
  }
  withdraw()
  {
    if (this.withdrawForm.valid )

    {
            var acno=this.withdrawForm.value.acno;
          var pswd=this.withdrawForm.value.pswd;
          var amt=this.withdrawForm.value.amt;
          const result=(this.ds.withdraw(acno,pswd,amt));
    if(result)
    {
      var bal=this.ds.userDetails[`${acno}`]['balance'];

      alert(`Amount Rs.${amt} Sucessfully Withdrawn\nBalance: Rs.${bal}`)
    }
    else
        {
         


        }
      }
      else
      {
        alert("Invalid Input");
      }
    }
  }

