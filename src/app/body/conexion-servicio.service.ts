import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Sofkiano } from '../body/sofkiano'
import { of, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ConexionServiceService {

  private urlEndPoint: string = 'http://localhost:8080/uni/sofkianos';
  private HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' })

  constructor(private http: HttpClient) { }

  getDatos(): Observable<Sofkiano[]> {
    return this.http.get<Sofkiano[]>(this.urlEndPoint).pipe(
    map((response) => response));

  }

}

