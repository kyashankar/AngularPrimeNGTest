import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';

interface City {
  name: string;
  code: string;
}

@Component({
  selector: 'app-add-user',
  standalone: true,    // Correct usage of standalone for Angular 14+ standalone components
  imports: [DropdownModule,FormsModule],  // Import necessary modules here
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']  // Corrected from styleUrl to styleUrls
})
export class AddUserComponent {
  selectCity: string= '';
  cities: City[] = [
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' }
  ];

  // You can optionally implement ngOnInit() if you want to run code when the component is initialized.
  // ngOnInit(): void {
  //   // Your initialization logic here
  // }
}
