import { Component,OnInit} from '@angular/core';
import {MatChipEditedEvent, MatChipInputEvent} from '@angular/material/chips';
import {  ActivatedRoute,Router } from '@angular/router';
import { Options } from '@angular-slider/ngx-slider';
import {FormControl,FormGroup,Validators} from '@angular/forms'
import { User } from '../myinterface/user';
import { UserService } from '../myServices/user.service';
import { ProfileComponent } from '../profile/profile.component';
import {COMMA, ENTER} from '@angular/cdk/keycodes';



export interface Tag  {
  name: string;
}
interface Address{
  value: string;
  viewValue: string;
}
interface AddressGroup {
  disabled?: boolean;
  name: string;
  
}
export interface Tag {
 name: string;
}

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})
export class EditprofileComponent implements OnInit {
  userForm:User={
    id:1,
    fname:'',
    lname:'',
    email:'',
    phone:123344,
    age:1,
    state:'',
    country:'',
    address:'',
    tag:'',
    tag1:'',
    tag2:''
  
  }
  dialogRef: any;

  //age slider
  value: number = 20;
  options: Options = {
    floor: 20,
    ceil: 60
  };

  constructor(private userService:UserService,private router:Router,private route:ActivatedRoute){}
  ngOnInit(): void {
  
  }
  
  submit(){
    this.router.navigateByUrl('profile');
  }
  

  srcc:string='../assets/profile avtar..jpg'


  onselectFile(e:any){
    if(e.target.files){
      var reader=new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload=(event:any)=>{
        this.srcc=event.target.result;
      }
    }
  
  }

  
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
    state:new FormControl("",
    [Validators.required]
    ),
    tags:new FormControl("",
    [Validators.required])

    
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

  get state():FormControl
  {
    return this.registerForm.get("state") as FormControl;
  }
  // get Tags():FormControl
  // {
  //   return this.registerForm.get("tag") as FormControl;
  // }
  

  addressControl = new FormControl('');

  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  tags: Tag[] = [{name: 'Cricket'}, {name: 'Football'}, {name: 'Hocky'}];

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value) {
      this.tags.push({name: value});
    }

    // Clear the input value
    event.chipInput!.clear();
  }

  remove(tag: Tag): void {
    const index = this.tags.indexOf(tag);

    if (index >= 0) {
      this.tags.splice(index, 1);
    }
  }

  edit(tag: Tag, event: MatChipEditedEvent) {
    const value = event.value.trim();

    // Remove tag if it no longer has a name
    if (!value) {
      this.remove(tag);
      return;
    }

    // Edit existing tag
   
  }

}
