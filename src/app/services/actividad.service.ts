import { Injectable } from '@angular/core';
import { Actividad } from 'src/models/actividad';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ActividadService {
  URL_API = 'http://localhost:3000/actividades';
  public actividad:Actividad=
  {
    cveTema:0,
    nombre:'',
    contenido:'',
    tipo:0,
    estatus:0,
    cveTemaPrerequisito:0,
    orden:0,
    intentos:0
  };
  actividades: Actividad[]=[];
  constructor(private http:HttpClient) { }

  getActividad(){
    return this.http.get<Actividad[]>(this.URL_API);
  }

  createActividad(actividad:Actividad){
    return this.http.post(this.URL_API,actividad);
  }

  deleteActividad(cveActividad:any){
    return this.http.delete(this.URL_API+cveActividad);
  }

  editActividad(actividad:Actividad){
    return this.http.put(this.URL_API+actividad.cveActividad,actividad);
  }
}
