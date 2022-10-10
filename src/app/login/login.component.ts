import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private userService:LoginService,private router:Router) { }
username:string=""
password:string=""
msg:boolean=false;
sup:boolean=false
  ngOnInit(): void {
    if(Number(localStorage.getItem('userId'))){

      this.router.navigate(['/editor'])
    }
  }

  login(){
this.userService.login(this.username,this.password).subscribe(data=>{
  console.log(data);
  if(data===null)
{
  data={id:0}
console.log(data);

}
  if(data.id>0){
    console.log(data);
    
localStorage.setItem('userId',data.id)
if(Number(localStorage.getItem('userId'))){

  this.router.navigate(['/editor'])
}
}
else{
  this.msg=true
}
  
})
  }
signup(){
  this.msg=false

  this.sup=true
}
Subscribe(){
  this.userService.subscribe(this.username,this.password).subscribe(data=>{
    console.log(data);
    if(data.id>0){
      this.msg=false

  localStorage.setItem('userId',data.id)
  if(Number(localStorage.getItem('userId'))){
  
    this.router.navigate(['/editor'])
  }
  }
    
  })
}

}
