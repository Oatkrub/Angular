import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl , FormGroup, Validators} from '@angular/forms';
import {MatDialogModule , MatDialogActions,MatDialogClose,MatDialogContainer,MatDialogContent, MAT_DIALOG_DATA} from '@angular/material/dialog' ;
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon' ;
import { MatIcon } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button' ;
import {MatButton} from '@angular/material/button'
import { LoginFormComponent } from '../login-form/login-form.component';
import { StructuralDirectiveDirective } from '../structural-directive.directive';
import { AttributeDirectiveDirective } from '../attribute-directive.directive';
import { MyPipePipe } from '../my-pipe.pipe';

export interface Data {
  name : string,
  lastName : string,
  age : string,
  address : string
}

@Component({
  selector: 'app-demographic-form',
  standalone: true,
  imports: [CommonModule,
    ReactiveFormsModule,
    MyPipePipe,
    FormsModule,
    MatDialogModule,
    StructuralDirectiveDirective,
    AttributeDirectiveDirective,
    MatIconModule,
    MatButtonModule,
    MatDialogActions,
    MatDialogClose,
    MatDialogContainer,
    MatDialogContent],
  templateUrl: './demographic-form.component.html',
  styleUrl: './demographic-form.component.css'
})
export class DemographicFormComponent {

  formData : Data = {name : '' , lastName : '' , age : '' , address : ''}
  constructor (private dialog : MatDialog) {
    
  }
  
  formGroup : FormGroup = new FormGroup({
    name : new FormControl('' , 
      [Validators.required]),
    lastName : new FormControl(null , 
      [Validators.required]),
    age : new FormControl(null ,
      [Validators.required , 
      Validators.pattern(/^(?:1[01][0-9]|120|[1-9][0-9]?)$/)]),
    address : new FormControl(null ,
      [Validators.required])
  })
  imageIndex: number = 0;
  isShowData : boolean = false ;
  isSubmit : boolean = false ;
  submitForm() {
    
    // if (this.formGroup.valid) {
    //   this.formData = { ...this.formGroup.value };
    // }
    this.isSubmit = true ;
    console.log(this.formGroup.value.name) ;
    alert("successfully") ;
  }
  
  redirect() : void{
    this.dialog.open(LoginFormComponent  , {
      data : {
        isOpen : true 
      },
      // panelClass : 'dialog'
    });
  }
  print () {
    
    this.imageIndex++;
    this.imageIndex %= 3 ;
  }

  showData () {
    this.isShowData = !this.isShowData ;
  }
}
