import { Injectable } from '@angular/core';
import { debounceTime } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  currentUser : any
  currentAcno : any

  userDetails:any={
    1000:{acno:1000,username:'sayis',pasword:123,balance:5430000,transaction:[]},
    1001:{acno:1001,username:'Noufal',pasword:123,balance:4000,transaction:[]},
    1002:{acno:1002,username:'Abhi',pasword:123,balance:2000,transaction:[]},
    1003:{acno:1003,username:'Rithik',pasword:123,balance:1000000,transaction:[]}

  }
  constructor() { }
  register(acno:any,username:any,pasword:any){
    var userDetails=this.userDetails
    if(acno in userDetails){
      alert('Alredy Exist This Account Number ')
      
      
      return false
    }else{ 
      // add details of user registerd data in Data Base
      userDetails[acno]={
        acno,
        username,
        pasword,
        balance:0,
        transaction:[]
      }
    
      return true
    }
  }
  login(acno:any,Psw:any){
    var userDetails = this.userDetails
    if(acno in userDetails){
      if(Psw==userDetails[acno]['pasword'] ){
        this.currentUser=userDetails[acno]['username'] // display username in dashboard page 
        
        this.currentAcno = acno
        //check the password user enter password and data base password
        return true
      }else{

        alert('Incorrect Password')
        return false
      }
    }else{
      alert('Account Number Not Exist')
      return false
    }
  }
  deposite(acno:any,psw:any,amt:any){
   var amount = parseInt(amt)
    let userDetails = this.userDetails
    if(acno in userDetails){
      if(psw == userDetails[acno]['pasword']){
        userDetails[acno]['balance']+=amount
        userDetails[acno]['transaction'].push({
          type:'Credit',
          amount
        })
        return userDetails[acno]['balance']
      }else{
        alert('Incurrect Password')
        return false
      }
    }else{
      alert("Incorrect Account Number")
      
      
      
      return false
    }
  }

  withdraw(acno:any,psw:any,amt:any){
    var amount = parseInt(amt)
    let userDetails = this.userDetails
    if(acno in userDetails){
      if(psw == userDetails[acno]['pasword']){
       if(userDetails[acno]['balance']>amount){
        userDetails[acno]['balance']-=amount;
        userDetails[acno]['transaction'].push({
          type:'Debit',
          amount,
          
        })
        console.log(userDetails);
        
        return userDetails[acno]['balance']
       }else{
        alert('Inffeciant Balance')
       }
      }else{
        alert("Incorrect Password")
        return false
      }
    }else{
      alert('Invalued Account Number')
      return false
    }
    
  }
  getTransaction(acno:any){
    return this.userDetails[acno]['transaction']
  }
  getBalance(acno:any){
    return this.userDetails[acno]['balance']
  }
}
