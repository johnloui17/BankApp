
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';


@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {




  //data
  uname='';
  acno1='';
  pswd1='';


constructor(public ds:DataService,public router:Router)
{}

ngOnInit(): void{

}



register()
{
  var uname=this.uname;
  var acno1=this.acno1;
  var pswd1=this.pswd1;

  const result=this.ds.register(acno1,uname,pswd1);
  if(result)
  {
    alert("Register Successful");
    this.router.navigateByUrl('');
  }  
  else{
    alert("User Already Registered ");
    this.router.navigateByUrl('register');
  }
}
}
