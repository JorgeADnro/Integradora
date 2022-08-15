import { ActividadService } from './../../services/actividad.service';
import { Component, OnInit } from '@angular/core';
import { Actividad } from 'src/models/actividad';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-ver-curso',
  templateUrl: './ver-curso.component.html',
  styleUrls: ['./ver-curso.component.css']
})
export class VerCursoComponent implements OnInit {

  constructor(public actividadService:ActividadService) { }

  ngOnInit(): void {
    this.getActividad();
  }

  getActividad(){
    this.actividadService.getActividad().subscribe(
      res=> {
        this.actividadService.actividades= res;
        console.log(res);
      },
      err=> console.log(err)
    )
  }

  createActividad(form:NgForm){
    if(form.value.cveActividad){
      alert('actualizando');
      this.actividadService.editActividad(form.value).subscribe(
        res=> console.log(res),
        err=> console.log(err)
      );
    }else{
    this.actividadService.createActividad(form.value).subscribe(
      res=>{
        this.getActividad();
        form.reset();
      },
      err=> console.log(err)
    )}
  }

  deleteActividad(cveActividad:any){
    const resp= confirm('Estás seguro de eliminarlo?')
    console.log('eliminando'+cveActividad);
    if(resp){
      this.actividadService.deleteActividad(cveActividad).subscribe(
        (res)=>{
          this.getActividad;
        },
        (err)=> console.log(err)
      );
    }
  }

  editActividad(actividad:Actividad){
    this.actividadService.actividad=actividad;
  }

  formReset(form:NgForm){
    this.actividadService.actividad=form.value;
    form.reset();
  }

}
