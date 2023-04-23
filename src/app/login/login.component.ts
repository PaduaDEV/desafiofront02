import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private http: HttpClient) {}

  onSubmit() {
    console.log('Email:', this.email);
    console.log('Senha:', this.password);

    const body = {
      email: this.email,
      password: this.password
    };

    this.http.post('http://127.0.0.1:8000/api/login', body).subscribe(
      data => console.log(data),
      error => console.log(error)
    );
  }
}
