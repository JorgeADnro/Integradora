import { Injectable } from '@angular/core';
import { Tema } from 'src/models/tema';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class TemaService {
  URL_API = 'http://localhost:3000/temas';
  public tema:Tema=
  {
    cveTema:0,
    cveArea:0,
    nombre:'',
    descripcion:'',
    cvePersona:0,
    activo:0,
    base:0
  };
  temas: Tema[]=[];
  constructor(private http:HttpClient) { }

  getTema(){
    return this.http.get<Tema[]>(this.URL_API);
  }

  createTema(tema:Tema){
    return this.http.post(this.URL_API,tema);
  }

  deleteTema(cveTema:any){
    return this.http.delete(this.URL_API+cveTema);
  }

  editTema(temas:Tema){
    return this.http.put(this.URL_API+temas.cveTema,temas);
  }

}