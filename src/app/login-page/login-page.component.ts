import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
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
  
  LoginForm=this.fb.group({ //group   //* --regular expession
       
    acno:['',[Validators.required,Validators.pattern('[0-9]*')]], //array
    psw:['',[Validators.required,Validators.pattern('[0-9]*')]]

    //controll go to html page

  })
 
  // router :- variable of login
  //Router :- it is class of navgateByUrl
  constructor(private router:Router,private ds:DataService,private fb:FormBuilder) { }

  ngOnInit(): void {
  }
  acno=''
  psw=''
  login(){
    
    var acno = this.LoginForm.value.acno
    var psw = this.LoginForm.value.psw
    const result = this.ds.login(acno,psw)
    if(this.LoginForm.valid){
   if(result){
    
    alert('Login Success')
    this.router.navigateByUrl('dashboard')
   }
  }else{
    alert('login Failed')
    console.log(this.LoginForm.get('acno')?.errors);
    
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
