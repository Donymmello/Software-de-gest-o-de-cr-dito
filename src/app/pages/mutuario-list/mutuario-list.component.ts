import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Mutuario } from "../../mutuario";
import { MutuarioService } from 'src/app/services/mutuario.service';

@Component({
  selector: 'app-mutuario-list',
  templateUrl: './mutuario-list.component.html',
  styleUrls: ['./mutuario-list.component.scss']
})
export class MutuarioListComponent implements OnInit {

    mutuarios: Mutuario[];

    constructor(private mutuarioService: MutuarioService, 
      private router: Router) { }
    
    ngOnInit(): void {
      this.getMutuarios();
    }
  
    private getMutuarios(){
      this.mutuarioService.getMutuaiosList().subscribe(data => {
        this.mutuarios = data;
      });
    }
    mutuarioDetails(id: number){
      this.router.navigate(['mutuario-details', id]);
    }
  
    updateMutuario(id: number){
      this.router.navigate(['update-mutuario', id]);
    }
  
    deleteMutuario (id: number){
      this.mutuarioService.deleteMutuario(id).subscribe( data => {
        console.log(data);
        this.getMutuarios();
      })
    }
  }
