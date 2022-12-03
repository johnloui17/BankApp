import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit
{

  // text
  aim="Your banking partner"
  account="Account Number";
  password="Password";

  //data
  acno='';
  pswd="";



constructor(public ds:DataService,public router:Router)
{}

ngOnInit(): void{

}
// acnoChange(event:any)
// {
//   this.acno=event.target.value;
//   console.log(this.acno);

// }
// pswdChange(event:any)
// {
//   this.pswd=event.target.value;
//   console.log(this.pswd);


// }
// login()
// {
//   var acno=this.acno;
//   var pswd=this.pswd;
//   var userDetails=this.userDetails;
//   if(acno in userDetails)
//   {
//     if(pswd == userDetails[acno]['password'])
//     {
//       alert("Login Succesful");
//     }
//     else
//     {
//       alert("Login Failed");
//     }
//   }
//   else
//   {
//     alert("Invalid Account number");
//   }
// }


// login(a:any,b:any)
// {
//   var acno=a.value;
//   var pswd=b.value;
//   var userDetails=this.userDetails;
//   if(acno in userDetails)
//   {
//     if(pswd == userDetails[acno]['password'])
//     {
//       alert("Login Succesful");
//     }
//     else
//     {
//       alert("Login Failed");
//     }
//   }
//   else
//   {
//     alert("Invalid Account number");
//   }
// }

login()
{
  var acno=this.acno;
  var pswd=this.pswd;


  const result=this.ds.login(acno,pswd);
  if(result){
    alert("Login Succesful");
    this.router.navigateByUrl('home')

  }
  else{
    alert("Login Failed");


  }
}
  
}