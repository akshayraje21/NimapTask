import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
// import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
  {path:'profile',component:ProfileComponent},
  {path:'editprofile',component:EditprofileComponent}
  // {path:'home',component:HomeComponent},
  // {path:'register',component:RegisterComponent},
  // {path:'**',component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
