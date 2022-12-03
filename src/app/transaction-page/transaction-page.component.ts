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
  this.acno=this.ds.currentAcno;


  this.transaction=this.ds.getTransaction(this.acno);
  console.log(this.transaction);
}
ngOnInit(): void {
}


  
}
