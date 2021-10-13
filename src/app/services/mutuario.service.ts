import { Mutuario } from 'src/app/mutuario';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MutuarioService {
    
  private baseURL = "http://localhost:8080/api/mutuarios";

  constructor( private httpClient: HttpClient) { }

  getMutuaiosList(): Observable<Mutuario[]>{
    return this.httpClient.get<Mutuario[]>(`${this.baseURL}`);
  }
  createMutuario(mutuario: Mutuario): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, mutuario);
  }

  getMutuarioById(id: number): Observable<Mutuario>{
    return this.httpClient.get<Mutuario>(`${this.baseURL}/${id}`);
  }

  updateMutuario(id: number, mutuario: Mutuario): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, mutuario);
  }

  deleteMutuario(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}