import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private fb:FormBuilder, private router:Router,private ds:DataService) { }

  registerForm=this.fb.group({ //group   //* --regular expession
    uname:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]], //array   
    acno:['',[Validators.required,Validators.pattern('[0-9]*')]],
    psw:['',[Validators.required,Validators.pattern('[0-9]*')]]

    //controll go to html page

  })

  ngOnInit(): void {
  }
  uname='';
  psw='';
  acno='';
  register(){
    console.log(this.registerForm);
    
    var uname=this.registerForm.value.uname
    var psw = this.registerForm.value.psw
    var acno = this.registerForm.value.acno
    const result = this.ds.register(acno,uname,psw)
    if(this.registerForm.valid){
    if(result){
      alert('Register Success')
      this.router.navigateByUrl('')
    }else{
      alert('Register Faild')
    }
  }else{
    alert('Register Faild')
    console.log(this.registerForm.get('uname')?.errors);
    
  }
  }
  signin(){
    this.router.navigateByUrl('')
  }

}
