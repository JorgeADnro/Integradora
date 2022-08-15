import { Injectable } from '@angular/core';
import { CursoPersona } from 'src/models/cursoPersona';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CursoPersonaService {
  URL_API = 'http://localhost:3000/curso';
  public cursoPersona:CursoPersona=
  {
    cvePersona:0,
    cveCurso:0,
    nombrePersona: '',
    nombreCurso:''
  };
  cursosPersonas: CursoPersona[]=[];
  constructor(private http:HttpClient) { }

  getCursosPersonas(){
    return this.http.get<CursoPersona[]>(this.URL_API);
  }

}
