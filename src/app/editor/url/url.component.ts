import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-url',
  templateUrl: './url.component.html',
  styleUrls: ['./url.component.scss']
})
export class URLComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}




// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-url',
//   templateUrl: './url.component.html',
//   styleUrls: ['./url.component.scss']
// })
// export class UrlComponent implements OnInit {
 
  
//   url:URL={url:''}
//   constructor(private urlService:) { }
//   ngOnInit(): void {
//     this.url.user=localStorage.getItem('idUser')+''
//   }

//   creatQRcode(){

// this.urlService.createQrCode(this.url).subscribe(data=>{
//   console.log(data);
  
// })
//   }
 
  
// }
