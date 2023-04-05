import { Component, OnInit } from '@angular/core';
import { User } from '../myinterface/user';
import { Router } from '@angular/router';

import { UserService } from '../myServices/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{
 ss:string='..assets/profile.jpg'
  alldata:User[]=[];
  constructor(private userService:UserService,private route:Router){}
  ngOnInit(): void {
    this.fetch();
  }
  fetch()
   {
    this.userService.get().subscribe((x)=>{
      this.alldata=x;
    });
  }

  editProfile()
  {
    this.route.navigate([`editprofile`]);
  }

}
