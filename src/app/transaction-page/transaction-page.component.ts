import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-transaction-page',
  templateUrl: './transaction-page.component.html',
  styleUrls: ['./transaction-page.component.css']
})
export class TransactionPageComponent implements OnInit{
  transaction:any;
  acno:any;

    
  
constructor(public ds:DataService){
  
  this.acno=JSON.parse(localStorage.getItem('currentAcno')||'');
this.ds.getTransaction(this.acno)
  .subscribe((result:any)=>{
    this.transaction=result.transaction
},
result=>{
  alert(result.error.message)
})
}
ngOnInit(): void {
}


  
}
