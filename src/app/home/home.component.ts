import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { RegisterComponent } from '../register/register.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  bg:string='../assets/bg.jpg'
 constructor(private MatDialog:MatDialog){}
  
//  openDialog(){
//   this.matDialog.open(RegisterComponent,{width:'300px',})
//  }
 openDialog(){
  this.MatDialog.open(RegisterComponent,{
    width:'750px',height:'450px'
  })
  }
}

