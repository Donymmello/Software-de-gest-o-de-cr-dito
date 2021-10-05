import { Mutuario } from './mutuario';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MutuarioService {
    Mutuariocreate: any;
    createMutuario(mutuario: any) {
        throw new Error("Method not implemented.");
    }

   private baseURL = "http://localhost:8080/api/mutuarios";

  constructor( private httpClient: HttpClient) { }

  getMutuaiosList(): Observable<Mutuario[]>{
    return this.httpClient.get<Mutuario[]>(`${this.baseURL}`);
  }
}