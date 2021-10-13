import { UtilizadorService } from '../../services/utilizador.service';
import { Utilizador } from '../../utilizador';
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';


@Component({
    selector: 'app-utilizador-list',
    templateUrl: './utilizador-list.component.html',
    styleUrls: ['./utilizador-list.component.scss']
  })
  export class UtilizadorListComponent implements OnInit {
  
      utilizadores: Utilizador[];
  
      constructor(private utilizadorService: UtilizadorService, 
        private router: Router) { }
      
      ngOnInit(): void {
        this.getUtilizadores();
      }
    
      private getUtilizadores(){
        this.utilizadorService.getUtilizadoresList().subscribe(data => {
          this.utilizadores = data;
        });
      }
      utilizadorDetails(id: number){
        this.router.navigate(['utilizador-details', id]);
      }
    
      updateUtilizador(id: number){
        this.router.navigate(['update-utilizador', id]);
      }
    
      deleteUtilizador(id: number){
        this.utilizadorService.deleteUtilizador(id).subscribe( data => {
          console.log(data);
          this.getUtilizadores();
        })
      }
    }
  