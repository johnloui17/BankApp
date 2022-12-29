import { JsonPipe } from '@angular/common';
import { HttpClient,HttpHeaderResponse,HttpHeaders,} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { of } from 'rxjs';

//global HTTP header object
const options ={
  headers:new HttpHeaders()
}

@Injectable({
  providedIn: 'root',
})
export class DataService {
  currentAcno: any;
  currentUser: any;

  constructor(private http: HttpClient) {
    // this.getDetails();
  }
  userDetails: any = {
    // 1:{acno:1,username:"John",password:1,balance:1000,transaction:[]},
    // 2:{acno:2,username:"Jose",password:2,balance:1000,transaction:[]},
    // 3:{acno:3,username:"Jude",password:3,balance:1000,transaction:[]},
  };
  // saveDetails(){
  //   localStorage.setItem('DataBase',JSON.stringify(this.userDetails))
  //   localStorage.setItem('currentUser',JSON.stringify(this.currentUser))
  //   localStorage.setItem('currentAcno',JSON.stringify(this.currentAcno))
  //   localStorage.setItem('Balance',JSON.stringify(this.userDetails[this.currentAcno]['balance']))

  // }
  // getDetails(){
  //   if(localStorage.getItem('DataBase'))
  //   {
  //     this.userDetails-JSON.parse(localStorage.getItem('DataBase')||'');
  //   }
  //   if(localStorage.getItem('currentUser'))
  //   {
  //     this.userDetails-JSON.parse(localStorage.getItem('currentUser')||'');
  //   }
  //   if(localStorage.getItem('currentAcno'))
  //   {
  //     this.userDetails-JSON.parse(localStorage.getItem('currentAcno')||'');
  //   }
  // }

  //   register(acno1:any,username:any,pswd:any)
  //   {
  //     var acno=parseInt(acno1);
  //     var password=parseInt(pswd);

  //     let userDetails=this.userDetails;
  //     if(acno in userDetails)
  //     {
  //       return false;
  //     }
  //     else{
  //       userDetails[acno]={
  //         acno,username,password,balance:1000,transaction:[]
  //       }
  //       console.log(userDetails);
  //       return true;
  //     }

  //   }
  //   login(acno:any,pswd:any)
  //   {
  //     let userDetails=this.userDetails;
  //     if(acno in userDetails)
  //     {
  //         if(pswd==userDetails[acno]['password'])

  //              {     this.currentUser=userDetails[acno]['username'];
  //              this.currentAcno=parseInt(acno);
  //              this.saveDetails();

  //               return true;

  //             }

  //         else{
  //       return false;
  //              }
  //             }
  //     else{
  //       return false;
  //     }

  //   }
  //   deposit(acno:any,pswd:any,amt:any)
  //   {

  //       var acno1=parseInt(acno);

  //                 var amount=parseInt(amt);
  //                 let userDetails=this.userDetails;
  //                 if(acno1 in userDetails && this.currentAcno==acno1)
  //                 {
  //                   if(pswd == userDetails[acno1]['password'])
  //                   {
  //                                 userDetails[acno1]['balance']+=amount;
  //                                 userDetails[acno1]['transaction'].push
  //                                 ({
  //                                   Type:"Credit",
  //                                   Amount:amount,
  //                                   Account:acno,
  //                                   Balance:this.userDetails[acno1]['balance']

  //                                 })
  //                                 this.saveDetails();

  //                                 console.log( userDetails[acno1]['transaction']);
  //                                 return true;
  //                   }
  //                   else
  //                   {
  //                                 alert("Password Incorrect");
  //                                 return false;
  //                   }
  //                 }

  //                 else
  //                   {
  //                     alert("Account Not In System ");
  //                     return false;
  //                   }

  //                 }

  //   withdraw(acno:any,pswd:any,amt:any)
  //   {
  //     var acno1=parseInt(acno);
  // console.log(acno1);
  //     var amount=parseInt(amt);
  //     let userDetails=this.userDetails;
  //     if(acno1 in userDetails && this.currentAcno==acno1)
  //     {
  //       if(pswd == userDetails[acno1]['password'])
  //       {
  //         if(userDetails[acno1]['balance']>amount)
  //         {

  //         userDetails[acno1]['balance']-=amount;
  //         userDetails[acno1]['transaction'].push({
  //           Type:"Debit",
  //           Amount:amount,
  //           Account:acno1,
  //           Balance:this.userDetails[acno1]['balance']
  //         })
  //         this.saveDetails();

  //         console.log( userDetails[acno1]['transaction']);
  //         return true;
  //         }
  //         else{
  //           alert(`Insufficeint Balance!!\nAmount To Withdraw : ${amount}\nAvailable Balance : ${this.userDetails[acno1]['balance']}\nMonthly Minimum Balance : Rs${1}`);
  //           return false
  //         }
  //       }
  //       else
  //       {
  //         alert("Password Incorrect");
  //         return false;
  //       }
  //     }
  //       else
  //       {
  //         alert("Account Not In System ");

  //         return false;
  //       }

  //   }
  //   getTransaction(acno:any){
  //     let userDetails=this.userDetails;

  //     return userDetails[acno]['transaction']
  //   }

  //

  register(acno: any, username: any, password: any) {
    const data = {
      acno,
      password,
      username,
    };
    return this.http.post('http://localhost:3000/register', data);
  }

  login(acno: any, password: any) {
    const data = {
      acno,
      password,
    };
    return this.http.post('http://localhost:3000/login', data);
  }
  getToken() {
    //fetch token from localstorage
    const token = JSON.parse(localStorage.getItem('token') || '');
    //append token inside the header
    let headers=new HttpHeaders()

    if(token)
    {
      options.headers=headers.append('acc',token)
    }
    return options

    
  }
  deposit(acno: any, password: any, amt: any) {
    const data = {
      acno,
      password,
      amount: amt,
    };
    
    return this.http.post('http://localhost:3000/deposit', data,this.getToken())
  }

  withdraw(acno: any, password: any, amt: any) {
    const data = {
      acno,
      password,
      amount: amt,
    };
    console.log(acno,password,amt);
    return this.http.post('http://localhost:3000/withdraw', data,this.getToken())
   
  }
  getTransaction(acno: any) {
    const data={
      acno
    }
   return this.http.post('http://localhost:3000/getTransaction',data,this.getToken())
  }
  deleteAcc(acno:any){
    return this.http.delete('http://localhost:3000/deleteAcno/'+acno)

  }
}
