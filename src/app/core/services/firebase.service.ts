import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class FirebaseService{
  private url = environment.firebase.databaseURL;
  constructor(private http: HttpClient) {}

  guardarPedido(data:any): Observable<any>{
    return this.http.post(`${this.url}/pedidos.json`, data);
  }

  obtenerMenu(): Observable<any>{
    return this.http.get(`${this.url}/menu.json`);
  }
}
