import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Proveedor } from '../models/proveedor.model';
const baseUrl: string = "http://localhost:8090/api/proveedor"
@Injectable({
  providedIn: 'root'
})
export class ProveedorService {

  constructor(private http:HttpClient) { }

  agregarProveedor(proveedor:Proveedor):Observable<any>{
    return this.http.post<any>(baseUrl,proveedor);
  }

}
