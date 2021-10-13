import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';
import { Utilizador } from "src/app/utilizador";
import { UtilizadorService } from "src/app/services/utilizador.service";


@Component({
  selector: 'app-create-utilizador',
  templateUrl: './create-utilizador.component.html',
  styleUrls: ['./create-utilizador.component.scss']
})
export class CreateUtilizadorComponent implements OnInit {

  utilizador: Utilizador = new Utilizador();

  constructor(private utilizadorService: UtilizadorService,
    private router: Router) { }

  ngOnInit(): void {
  }

  saveUtilizador(){
    this.utilizadorService.createUtilizador(this.utilizador).subscribe( data =>{
      console.log(data);
      this.goToUtilizadorList();
    },
    error => console.log(error));
  }

  goToUtilizadorList(){
    this.router.navigate(['/utilizador-list']);
  }
  
  onSubmit(){
    console.log(this.utilizador);
    this.saveUtilizador();
  }
}