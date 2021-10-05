import { MutuarioService } from './../../mutuario.service';
import { Mutuario } from './../../mutuario';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mutuario-list',
  templateUrl: './mutuario-list.component.html',
  styleUrls: ['./mutuario-list.component.scss']
})
export class MutuarioListComponent implements OnInit {

    mutuarios: Mutuario[];

    constructor( private mutuarioService: MutuarioService) { }
  
    ngOnInit(): void {
      this.getMutuarios();
    }
  
    private getMutuarios(){
      this.mutuarioService.getMutuaiosList().subscribe(data => {
        this.mutuarios = data;
      });
    }
  
  }