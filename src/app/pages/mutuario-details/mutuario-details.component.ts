import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from "@angular/core";
import { Mutuario } from "./../../mutuario";
import { MutuarioService } from './../../mutuario.service';

@Component({
    selector: 'app-mutuario-details',
    templateUrl: './mutuario-details.component.html',
    styleUrls: ['./mutuario-details.component.scss']
  })
  export class MutuarioDetailsComponent implements OnInit {
  
    id: number
    mutuario: Mutuario 
    constructor(private route: ActivatedRoute, private mutuarioService: MutuarioService) { }
  
    ngOnInit(): void {
      this.id = this.route.snapshot.params['id'];
  
      this.mutuario = new Mutuario();
      this.mutuarioService.getMutuarioById(this.id).subscribe( data => {
        this.mutuario = data;
      });
    }
  
  }