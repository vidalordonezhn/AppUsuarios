import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  $url = 'https://gorest.co.in/public/v1/users';
  $token = '6bdbe3b0d9f3dcfe925a8afd5d564f7a5f3617746604327f06f1e4eaf85cbaa9';
  constructor(private http: HttpClient) { }


  getUsuarios(): Observable<any>{
    return  this.http.get<any>(this.$url+'?access-token='+this.$token);
  }

  getUsuario(id: number): Observable<any>{
    return this.http.get<any>(this.$url +'/' + id + '?access-token=' + this.$token)
  }
}
