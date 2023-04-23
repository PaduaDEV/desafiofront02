import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Router } from '@angular/router';


@Component({
  selector: 'app-cadastro-curso',
  templateUrl: './cadastro-curso.component.html',
  styleUrls: ['./cadastro-curso.component.css']
})
export class CadastroCursoComponent {
  
  nome: string  = '';
  email: string = '';
  senha: string  = '';
  curso: string  = '';
  cargaHoraria: number = 0;
  valor:number = 0;
  loading: boolean = false;

  constructor(private http: HttpClient, private router: Router) { 
    
    this.cargaHoraria = 0;
    this.onChangeCargaHoraria();
  }
  

  onChangeCargaHoraria() {
    switch (this.cargaHoraria) {
      case 20:
        this.valor = 100;
        break;
      case 40:
        this.valor = 200;
        break;
      case 60:
        this.valor = 300;
        break;
      default:
        this.valor = 0;
        break;
    }
  }

  submit() {
    if (!this.nome || !this.email || !this.senha || !this.curso || !this.cargaHoraria) {
      alert('Por favor, preencha todos os campos obrigatórios.');
      return;
    }
  
    const dados = {
      nome: this.nome,
      email: this.email,
      senha: this.senha,
      curso: this.curso,
      carga_horaria: this.cargaHoraria,
      valor: this.valor
    };
  
    this.loading = true; 
  
    this.http.post('http://127.0.0.1:8000/api/Api', dados).subscribe(
      (response) => {
        console.log('Cadastro realizado com sucesso!', response);
        alert('Cadastro realizado com sucesso!');
        this.loading = false; 
        this.router.navigate(['/login']); 
      },
      (error) => {
        console.error('Erro ao cadastrar!', error);
        alert('Erro ao cadastrar. Por favor, tente novamente mais tarde.');
        this.loading = false; 
      }
    );
  }
}