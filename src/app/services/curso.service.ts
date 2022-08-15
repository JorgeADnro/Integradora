import { Injectable } from '@angular/core';
import { Curso } from 'src/models/curso';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CursoService {
  URL_API = 'http://localhost:3000/curso';
  public curso:Curso=
  {
    cvePersona:0,
    nombre: '',
    descripcion:'',
    numHoras:0,
    activo:0,
    estatus:0,
    fechaCreado:'',
    fechaRevision:'',
    comentarios:'',
    tipoCurso:0
  };
  cursos: Curso[]=[];
  constructor(private http:HttpClient) { }

  getCursos(){
    return this.http.get<Curso[]>(this.URL_API);
  }

  createCurso(curso:Curso){
    return this.http.post(this.URL_API,curso);
  }

  deleteCurso(cveCurso:any){
    return this.http.delete(this.URL_API+cveCurso);
  }

  editCurso(curso:Curso){
    return this.http.put(this.URL_API+curso.cveCurso,curso);
  }

}
