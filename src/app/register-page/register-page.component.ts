
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
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
  acno='';
  pswd='';


constructor(public ds:DataService,public router:Router,private fb:FormBuilder)
{}
  ngOnInit(): void {

  }
registerForm=this.fb.group({
  acno1:['',[Validators.required,Validators.pattern('[0-9]*')]],
  pswd1:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]],
  uname:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]]
 })




// register()
// {
//   console.log(this.registerForm.get('uname')?.errors);

//   var uname=this.registerForm.value.uname;
//   var acno1=this.registerForm.value.acno1;
//   var pswd1=this.registerForm.value.pswd1;
// if((this.registerForm.valid))

// {  const result=this.ds.register(acno1,uname,pswd1);
//   if(result)
//   {
//     alert("Register Successful");
//     this.router.navigateByUrl('');
//   }  
//   else{
//     alert("User Already Registered ");
//     this.router.navigateByUrl('register');
//   }}

// else{
//   alert("Invalid Type Data");
// }
// }


register()
{
  console.log(this.registerForm.get('uname')?.errors);

  var username=this.registerForm.value.uname;
  var acno=this.registerForm.value.acno1;
  var password=this.registerForm.value.pswd1;
if((this.registerForm.valid)){ 
   this.ds.register(acno,username,password)
    .subscribe((result:any)=>{
      alert(result.message);
      this.router.navigateByUrl('');
    })
}
// else{
//   alert("invalid Form")
// }
}
}
