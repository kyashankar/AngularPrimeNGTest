import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TableModule } from 'primeng/table';
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [TableModule, HttpClientModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  userList: any[] =[];

  constructor(private http: HttpClient) {
    this.getUser();
  }

  getUser() {
    this.http.get("https://jsonplaceholder.typicode.com/users").subscribe((res:any)=>{
      this.userList = res;
    })
  }
  
    
  }

