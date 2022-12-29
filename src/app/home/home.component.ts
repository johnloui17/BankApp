import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../data.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  user="";
  amt='';
  acno='';
  pswd='';
  amt1='';
  acno1='';
  pswd1='';
  sdate:any;

  ngOnInit(): void {
    if(!localStorage.getItem('currentUser'))
    {
      alert("please login first ");
      this.router.navigateByUrl('');
    }
    this.user=JSON.parse(localStorage.getItem('currentUser')||'');

console.log()  }
 
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
  constructor(private ds:DataService,private fb:FormBuilder,private router:Router)
  {
  if(localStorage.getItem('currentUser'))
   { this.user=JSON.parse(localStorage.getItem('currentUser')||'');}
    this.sdate=new Date();
  }
  delete()
  {
    // this.router.navigateByUrl('delete');
    this.acno=JSON.parse(localStorage.getItem('currentAcno')||'');
  }
  deposit()
  {
if (this.depositForm.valid)

    {
      var acno=this.depositForm.value.acno;
    var pswd=this.depositForm.value.pswd;
    var amount=this.depositForm.value.amt;
    this.ds.deposit(acno,pswd,amount)
    .subscribe((result:any)=>{
    alert(result.message);
    },
    result=>{
    alert(result.error.message)

    })
  }
  }
  logout()
  {
localStorage.removeItem('currentAcno'); 
localStorage.removeItem('currentUser');  
localStorage.removeItem('token'); 
localStorage.removeItem('Balance'); 

this.router.navigateByUrl('');

 }
  withdraw()
  {
  
            var acno=this.withdrawForm.value.acno;
          var pswd=this.withdrawForm.value.pswd;
          var amount=this.withdrawForm.value.amt;
          if (this.withdrawForm.valid )
          {
   
          this.ds.withdraw(acno,pswd,amount)
          .subscribe((result:any)=>{
          alert(result.message);
          },
          result=>{
          alert(result.error.message)
      
          })
        }
      }
    onCancel(){
      this.acno='';
    }
    onDelete(event:any){
      this.ds.deleteAcc(event)
      .subscribe((result:any)=>{
        alert(result.message)
this.logout()    ;  },
      result=>{
        alert(result.error.message);
      })
    }
  }


