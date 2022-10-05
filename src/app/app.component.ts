import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  logged:boolean=false
  title = 'appqrcode';
  
  constructor(private router:Router){

   

  }
logout(){
  localStorage.removeItem('userId')

  this.router.navigate(['/login'])
  this.logged =false


}
login(){
  this.router.navigate(['/login'])

  this.logged =false

}


}
