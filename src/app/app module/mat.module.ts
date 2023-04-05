import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSliderModule} from '@angular/material/slider';
import {MatSelectModule} from '@angular/material/select';
import {MatChipsModule} from '@angular/material/chips';
import { NgxSliderModule } from "@angular-slider/ngx-slider";


const material=[
  MatButtonModule,
  MatIconModule,
  MatCheckboxModule,
  MatSliderModule,
  MatFormFieldModule,
  MatDialogModule,
  MatInputModule,
  MatSelectModule,
  MatChipsModule,
  NgxSliderModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    material
  ],
  exports:[
    material 
  ]
})
export class MatModule { }
