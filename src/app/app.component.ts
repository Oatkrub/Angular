import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DemographicFormComponent } from './demographic-form/demographic-form.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,DemographicFormComponent,MatDialogModule,MatButtonModule,MatIconModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'assignment-03';
}
