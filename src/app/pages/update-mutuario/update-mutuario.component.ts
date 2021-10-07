import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Mutuario } from "./../../mutuario";
import { MutuarioService } from "./../../mutuario.service";

@Component({
    selector: 'app-update-mutuario',
    templateUrl: './update-mutuario.component.html',
    styleUrls: ['./update-mutuario.component.scss']
  })
  export class UpdateMutuarioComponent implements OnInit {
  
    id: number;
    mutuario: Mutuario = new Mutuario();
    constructor(private mutuarioService: MutuarioService,
      private route: ActivatedRoute,
      private router: Router) { }
  
    ngOnInit(): void {
      this.id = this.route.snapshot.params['id'];
  
      this.mutuarioService.getMutuarioById(this.id).subscribe(data => {
        this.mutuario = data;
      }, error => console.log(error));
    }
  
    onSubmit(){
      this.mutuarioService.updateMutuario(this.id, this.mutuario).subscribe( data =>{
        this.goToMutuarioList();
      }
      , error => console.log(error));
    }
  
    goToMutuarioList(){
      this.router.navigate(['/mutuarios']);
    }
  }