import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  // login display
  user='';
  currentAcno=''

  acno='';
  psw='';
  amount='';

  acno1='';
  psw1='';
  amount1='';
  constructor(private ds:DataService) {
  this.user = this.ds.currentUser
  this.currentAcno = this.ds.currentAcno
  
   }
  ngOnInit(): void {
  }
  deposite(){
    var acno1 = this.acno1
    var psw1= this.psw1
    var amount1 = this.amount1
    const result = this.ds.deposite(acno1,psw1,amount1)
    if(result){
      alert(`${amount1} Credited successfully... your Balance is : ${result}`)
    }
  }
  withdraw(){
    var acno = this.acno
    var psw = this.psw
    var amount = this.amount
    const result = this.ds.withdraw(acno,psw,amount) 
    if(result){
    alert(`${amount} is debited Successfully... Your Balance is ${result}`)

    }
  }
  balance(){
    var balance = this.ds.getBalance(this.currentAcno)
    alert('Your Balance is :'+balance)
    
    
  }

}
