import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  ayim = "Your Perfect Banking Partner"    //string Intrpolation Methode Example
  acnt="Enter Your Account Number"        //Property Binding Methode Examlpe
  
 
  // router :- variable of login
  //Router :- it is class of navgateByUrl
  constructor(private router:Router ,private ds:DataService) { }

  ngOnInit(): void {
  }
  acno=''
  psw=''
  login(){
    var acno = this.acno
    var psw = this.psw
    const result = this.ds.login(acno,psw)
   if(result){
    
    alert('Login Success')
    this.router.navigateByUrl('dashboard')
   }
    
  }
  // login(a:any,p:any){
  //   var acno = a.value
  //   var pass = p.value
  //   var userDetails = this.userDetails
  //   if(acno in userDetails){
  //     if(pass==userDetails[acno]['pasword']){
  //       alert('login Success')
  //     }else{
  //       alert('Incorrect Password')
  //     }
  //   }else{
  //     alert('Account Number Not Exist')
  //   }
    
  // }
  
// Dolar Binding
  // acnochange( event:any){
  //   // console.log(event.target.value);
  //   this.acno=event.target.value
  //    console.log(this.acno);
     
  // }
  // pswchange(event:any){
  //   this.pass = event.target.value
  //   console.log(this.pass);
    
  // }

}
