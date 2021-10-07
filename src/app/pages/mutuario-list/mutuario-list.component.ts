import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Mutuario } from "./../../mutuario";
import { MutuarioService } from "./../../mutuario.service";

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
        console.log('Here');
        
        console.table(this.mutuarios);
        
      });
    }
    employeeDetails(id: number){
      this.router.navigate(['mutuario-details', id]);
    }
  
    updateMutuario(id: number){
      this.router.navigate(['update-mutuario', id]);
    }
  
    deleteEmployee(id: number){
      this.mutuarioService.deleteMutuario(id).subscribe( data => {
        console.log(data);
        this.getMutuarios();
      })
    }
  }
