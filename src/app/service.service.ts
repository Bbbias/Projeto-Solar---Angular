import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';
import { dados } from './dados';
import { dadosGeracao } from './dadosGeracao';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  dados = dados

  private urlUnidades =`${environment.API}/unidades/`
  private urlGeracoes =`${environment.API}/geracoes/`
  
  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
};

  getUnidades(): Observable<dados[]> {
    return this.http.get<dados[]>(this.urlUnidades)
}

  getGeracao(): Observable<dadosGeracao[]> {
    return this.http.get<dadosGeracao[]>(this.urlGeracoes)
}

  getUnidade(id: string){
    const _urlUnidades = `${this.urlUnidades}/${id}`

    return this.http.get<dados>(_urlUnidades)
}

  OnDelete( dados: dados) {
  return  this.http.delete(this.urlUnidades + dados.id)
}

  OnUpdate(id: any, dado: any): Observable<dados> {
    return this.http.put<dados>(
        this.urlUnidades + id,
        JSON.stringify(dado),
        this.httpOptions
      )}

}

