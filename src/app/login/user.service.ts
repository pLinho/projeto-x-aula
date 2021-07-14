import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(
    private readonly httpClient: HttpClient
  ) { }

  async login(username: string, passord: string) {
    const endpoint = `http://desenv.ni.nfnoato.com.br/allus/api/autenticador/autenticar`;

    let headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    })

    let body = new HttpParams()
      .set(`identificador`, username)
      .set(`senha`, passord);

    return this.httpClient.post<string>(endpoint, body, {
      headers: headers,
      responseType: 'text'
    } as any).toPromise();
  }
}
