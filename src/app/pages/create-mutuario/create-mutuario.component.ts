import { Component, OnInit } from "@angular/core";
import { MutuarioService } from './../../mutuario.service';
import { Router } from '@angular/router';
import { Mutuario } from "./../../mutuario";

@Component({
  selector: 'app-create-mutuario',
  templateUrl: './create-mutuario.component.html',
  styleUrls: ['./create-mutuario.component.scss']
})
export class CreateMutuarioComponent implements OnInit {

  mutuario: Mutuario = new Mutuario();
  constructor(private mutuarioService: MutuarioService,
    private router: Router) { }

  ngOnInit(): void {
  }

  saveMutuario(){
    this.mutuarioService.createMutuario(this.mutuario).subscribe( data =>{
      console.log(data);
      this.goToMutuarioList();
    },
    error => console.log(error));
  }

  goToMutuarioList(){
    this.router.navigate(['/mutuarios']);
  }
  
  onSubmit(){
    console.log(this.mutuario);
    this.saveMutuario();
  }
}