import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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

  depositeForm=this.fb.group({ //group   //* --regular expession
    amount1:['',[Validators.required,Validators.pattern('[0-9]*')]], //array   
    acno1:['',[Validators.required,Validators.pattern('[0-9]*')]],
    psw1:['',[Validators.required,Validators.pattern('[0-9]*')]]

    //controll go to html page

  })
  withdrawForm=this.fb.group({ //group   //* --regular expession
    amount:['',[Validators.required,Validators.pattern('[0-9]*')]], //array   
    acno:['',[Validators.required,Validators.pattern('[0-9]*')]],
    psw:['',[Validators.required,Validators.pattern('[0-9]*')]]

    //controll go to html page

  })

  

  constructor(private ds:DataService,private fb:FormBuilder,private router:Router) {
  this.user = this.ds.currentUser
  this.currentAcno = this.ds.currentAcno

 
   }
  ngOnInit(): void {
    if(!localStorage.getItem('currentAcno')){
      alert('Please Login')
      this.router.navigateByUrl('')
    }
  }
  deposite(){
    var acno1 = this.depositeForm.value.acno1
    var psw1= this.depositeForm.value.psw1
    var amount1 = this.depositeForm.value.amount1
    const result = this.ds.deposite(acno1,psw1,amount1)
    if(this.depositeForm.valid){
    if(result){
      alert(`${amount1} Credited successfully... your Balance is : ${result}`)
    }
  }else{
    alert('deposite faild')
    console.log(this.depositeForm.get('acno')?.errors);
    
  }
  }
  withdraw(){
    var acno = this.withdrawForm.value.acno
    var psw = this.withdrawForm.value.psw
    var amount = this.withdrawForm.value.amount
    const result = this.ds.withdraw(acno,psw,amount) 
    if(this.withdrawForm.valid){
    if(result){
    alert(`${amount} is debited Successfully... Your Balance is ${result}`)

    }
  }
  }
  balance(){
    var balance = this.ds.getBalance(this.currentAcno)
    alert('Your Balance is :'+balance)
    
    
  }
  logout(){
    //remove login name
    localStorage.removeItem('currentUser')
    localStorage.removeItem('currentAcno')

    //redirect Page
    this.router.navigateByUrl('')
  }
  Delete(){
    this.acno=JSON.parse(localStorage.getItem('currentAcno')||'')
  }
  onCancel(){
    this.acno=''
  }
}
