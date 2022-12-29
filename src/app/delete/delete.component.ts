import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';


@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit{
  @Input()item:string|undefined;
  @Output() onCancel=new EventEmitter();
  @Output() onDelete=new EventEmitter();

  ngOnInit(): void {
  }
  constructor(private ds:DataService,private router:Router)
{}
cancel()
{
  this.onCancel.emit();
}
deleteAcno()
{
this.onDelete.emit(this.item)
}
}
