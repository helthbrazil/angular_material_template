import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Endereco } from './endereco';

@Injectable({
  providedIn: 'root'
})
export class BuscaCepService {
  private url = 'https://viacep.com.br/ws/';
  constructor(private httpClient: HttpClient) { }

  public buscarCep(cep: string): Observable<Endereco> {
    const url = this.url + `${cep}/json/`;
    console.log(url);
    return this.httpClient.get<Endereco>(url);
  }

}
