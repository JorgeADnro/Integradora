import { Injectable } from '@angular/core';
import { Persona } from 'src/models/persona';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class PersonaService {
  URL_API = 'http://localhost:3000/personas';
  public persona:Persona=
  {
    cvePersona:0,
    nombre:'',
    apellidoPat:'',
    apellidoMat:'',
    email:'',
    facebook:'',
    fechaNacimiento:'',
    usuario:'',
    tipoPersona:0,
    cveAreaAcademica:0
  };
  personas: Persona[]=[];
  constructor(private http:HttpClient) { }

  getCursos(){
    return this.http.get<Persona[]>(this.URL_API);
  }

  createCurso(persona:Persona){
    return this.http.post(this.URL_API,persona);
  }

  deleteCurso(cvePersona:any){
    return this.http.delete(this.URL_API+cvePersona);
  }

  editCurso(persona:Persona){
    return this.http.put(this.URL_API+persona.cvePersona,persona);
  }

}