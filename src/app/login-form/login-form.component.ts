import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl , FormGroup, Validators} from '@angular/forms';
import {MatDialogModule , MatDialogActions,MatDialogClose,MatDialogContainer,MatDialogContent, MAT_DIALOG_DATA} from '@angular/material/dialog' ;
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon' ;
import { MatIcon } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button' ;
import {MatButton} from '@angular/material/button'
// import { MyDirectiveDirective } from '../my-directive.directive';
@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [CommonModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatIconModule,
    MatButtonModule,
    MatDialogActions,
    MatDialogClose,
    MatDialogContainer,
    MatDialogContent
  ],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent {
  constructor (private dialog : MatDialogRef<LoginFormComponent> ,@Inject(MAT_DIALOG_DATA) public data: {isOpen : boolean}) {

  }
  email! : string ;
  password! : string ;
  formGroup: FormGroup = new FormGroup({
    email: new FormControl(null, [
      Validators.required,
      Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$')
    ]),
    password: new FormControl(null, [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(10)
    ])
  });
  submit () {
    alert("login successfully") ;
  }
  closeDialog() : void {
    this.dialog.close() ;
  }
}
