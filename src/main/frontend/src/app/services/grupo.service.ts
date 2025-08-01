import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Grupo } from '../model/grupo';
import { Excepcion } from '../model/excepcion';
import { Gasto } from '../model/gasto';
import { NombreService } from './nombre.service';

@Injectable({
  providedIn: 'root'
})
export class GrupoService {

  constructor(
    private http: HttpClient,
    private nombreService: NombreService) {

  }

  listar(): Observable<Grupo[]> {

    return this.http.get<Grupo[]>('/api/grupos')
      .pipe(catchError(this.falloAlListar));
  }

  crear(nombre: string, miembros: string[]): Observable<Grupo> {

    const nuevoGrupo: Grupo = {
      nombre,
      miembros
    };

    return this.http.post<Grupo>('/api/grupos', nuevoGrupo)
      .pipe(catchError(this.falloAlGuardar));
  }

  agregarGasto(grupo: Grupo, monto: number): Observable<Grupo> {

    const nombre = this.nombreService.getNombre();
    const nuevoGasto: Gasto = {
      monto,
      nombre
    }

    return this.http.post<Grupo>(`/api/grupos/${grupo.id}/gastos`, nuevoGasto)
      .pipe(catchError(this.falloAlGuardar));
  }

  falloAlGuardar(error: HttpErrorResponse) {
    return throwError(new Excepcion("No se puede guardar"));
  }

  falloAlListar(error: HttpErrorResponse) {
    return throwError(new Excepcion("No se pueden listar los Grupos"));
  }
}
