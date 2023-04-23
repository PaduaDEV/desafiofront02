import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface User {
  id: number;
  name: string;
  email: string;
  curso: string;
}

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: User[] = [];
  selectedUser: User = { id: 0, name: '', email: '', curso: '' }; 

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<User[]>('http://127.0.0.1:8000/api/Api').subscribe((users: User[]) => {
      this.users = users;
    });
  }

  editUser(user: User) {
    this.selectedUser = user;
  }

  
  deleteUser(id: number) {
    this.http.delete(`http://127.0.0.1:8000/api/Api/${id}`).subscribe(() => {
      
      this.users = this.users.filter(user => user.id !== id);
    });
  }
}
