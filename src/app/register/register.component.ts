
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {Component, OnInit} from '@angular/core';
import {MatChipEditedEvent, MatChipInputEvent} from '@angular/material/chips';
import {  Router } from '@angular/router';

import {FormControl,FormGroup,Validators} from '@angular/forms'
import { User } from '../myinterface/user';
import { UserService } from '../myServices/user.service';
import { ProfileComponent } from '../profile/profile.component';

export interface Fruit {
  name: string;
}
interface Address{
  value: string;
  viewValue: string;
}
interface AddressGroup {
  disabled?: boolean;
  name: string;
  address: Address[];
}
export interface Fruit {
 name: string;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  userform:User={
    fname: '',
    lname: '',
    email: '',
    phone: 0,
    age: 0,
    state: '',
    country: '',
    address: '',
    tag: '',
    tag1: '',
    tag2: ''
  }
  dialogRef: any;
  
  constructor(private userService:UserService,private router:Router){}
  ngOnInit(): void {
    
  }
  
  submit(){
    this.router.navigateByUrl('profile');
  }
  create(){
    console.log("create method called");
    console.log(this.userform);
    this.userService.register(this.userform)
    .subscribe({
      next:(data) => {
      // this.router.navigate(["./profile"]);
      },
      error:(err) => {
        console.log(err);
      }
    })
  }




  srcc:string='../assets/profile avtar..jpg'

  repeatPass:string='none';
  registerForm=new FormGroup({
    firstname:new FormControl("",
    [Validators.required,
      Validators.minLength(3),
      Validators.pattern("[a-zA-Z].*")]),
    lastname:new FormControl("",
    [Validators.required,
      Validators.minLength(3),
      Validators.pattern("[a-zA-Z].*")]),
    email:new FormControl("",[Validators.required,Validators.email]),
    mobile:new FormControl("",
    [Validators.required,
      Validators.pattern("[0-9]*"),
      Validators.minLength(10),
      Validators.maxLength(10)
    ]),
    gender:new FormControl("",[Validators.required]),
    pwd:new FormControl("",
    [Validators.required,
      Validators.minLength(8),
      Validators.maxLength(15)]),
    rpwd:new FormControl(''),
  });


  get FirstName(): FormControl
  {
    return this.registerForm.get("firstname") as FormControl;
  }
  get LastName(): FormControl
  {
    return this.registerForm.get("lastname") as FormControl;
  }
  get Email(): FormControl
  {
    return this.registerForm.get("email") as FormControl;
  }
  get Mobile(): FormControl
  {
    return this.registerForm.get("mobile") as FormControl;
  }
  get Gender(): FormControl
  {
    return this.registerForm.get("gender") as FormControl;
  }
  get PWD(): FormControl
  {
    return this.registerForm.get("pwd") as FormControl;
  }
  get RPWD(): FormControl
  {
    return this.registerForm.get("rpwd") as FormControl;
  }

  addressControl = new FormControl('');
  addressGroups:  AddressGroup[] = [
    {
      name: 'Home',
      address: [
        {value: 'address-0', viewValue: 'Mumbai'},
        {value: 'address-1', viewValue: 'Pune'},
        
      ],
    },
    {
      name: 'Company',
      address: [
        {value: 'companyaddress-3', viewValue: 'Mumbai West'},
        {value: 'companyaddress-4', viewValue: 'Pune West'},
        
      ],
    },


  ];
  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  fruits: Fruit[] = [{name: 'Cricket'}, {name: 'Football'}, {name: 'Hocky'}];

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value) {
      this.fruits.push({name: value});
    }

    // Clear the input value
    event.chipInput!.clear();
  }

  remove(fruit: Fruit): void {
    const index = this.fruits.indexOf(fruit);

    if (index >= 0) {
      this.fruits.splice(index, 1);
    }
  }

  edit(fruit: Fruit, event: MatChipEditedEvent) {
    const value = event.value.trim();

    // Remove fruit if it no longer has a name
    if (!value) {
      this.remove(fruit);
      return;
    }

    // Edit existing fruit
    const index = this.fruits.indexOf(fruit);
    if (index >= 0) {
      this.fruits[index].name = value;
    }
  }
}
