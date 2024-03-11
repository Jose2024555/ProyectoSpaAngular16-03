import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Servicio } from '../model/servicios';
import { Observable } from 'rxjs';

const baseURL = 'http://localhost:8080/servicio'


@Injectable({
  providedIn: 'root'
})
export class ServiciosService {

  constructor(private HttpClient: HttpClient) { }
  readAll(): Observable<any>{
    return this.HttpClient.get(baseURL);
  }

  get( servicioId: number): Observable<any>{
    return this.HttpClient.get(`${baseURL}/${ servicioId}`)
  }
 create(data: Servicio): Observable<any>{
   return this.HttpClient.post(baseURL,data);
  }
 update(servicioId: number, data: Servicio): Observable <any>{
    return this.HttpClient.put(`${baseURL}/${ servicioId}`, data)
   }
  delete(servicioId: number): Observable<any>{
  return this.HttpClient.delete(`${baseURL}/${ servicioId}`);
  }
  deleteAll(): Observable<any>{
    return this.HttpClient.delete(baseURL);
  }
   searchByName(name: string): Observable<any>{
     return this.HttpClient.get(`${baseURL}?nombreServicio=${name}`);
   }

}
