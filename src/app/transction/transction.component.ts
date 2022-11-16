import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-transction',
  templateUrl: './transction.component.html',
  styleUrls: ['./transction.component.css']
})
export class TransctionComponent implements OnInit {
//to hold the current user acno
acno:any
//to hold transaction details 
transaction:any
  constructor(private ds:DataService) { 
    this.acno = this.ds.currentAcno
    this.transaction = this.ds.getTransaction(this.acno)
  }

  ngOnInit(): void {
  }

}
