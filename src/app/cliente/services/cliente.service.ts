import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'
import { Cliente } from '../model/cliente'
 
const baseURL = "http://localhost:8080/cliente";


@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private httpClient: HttpClient) { }
  readAll(): Observable<any> {
    return this.httpClient.get(baseURL);
  }

  read(clienteId: number): Observable<any> {
    return this.httpClient.get(`${baseURL}/${clienteId}`);
  }

  create(data: Cliente): Observable<any> {
    return this.httpClient.post(baseURL, data);
  }

  update(clienteId: number, data: Cliente): Observable<any> {
    return this.httpClient.put(`${baseURL}/${clienteId}`, data);
  }

  delete(clienteId: number): Observable<any> {
    return this.httpClient.delete(`${baseURL}/${clienteId}`);
  }

  deleteAll(): Observable<any> {
    return this.httpClient.delete(baseURL);
  }

  searchByName(name: string): Observable<any> {
    return this.httpClient.get(`${baseURL}?name=${name}`);
}
}