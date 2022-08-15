import { CursoService } from './../../services/curso.service';
import { Component, OnInit } from '@angular/core';
import { Curso } from 'src/models/curso';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-miscursos',
  templateUrl: './miscursos.component.html',
  styleUrls: ['./miscursos.component.css']
})
export class MiscursosComponent implements OnInit {

  constructor(public cursoService:CursoService) { }

  ngOnInit(): void {
    this.getCurso();
  }

  getCurso(){
    this.cursoService.getCursos().subscribe(
      res=> {
        this.cursoService.cursos= res;
        console.log(res);
      },
      err=> console.log(err)
    )
  }

  createCurso(form:NgForm){
    if(form.value.cveCurso){
      alert('actualizando');
      this.cursoService.editCurso(form.value).subscribe(
        res=> console.log(res),
        err=> console.log(err)
      );
    }else{
    this.cursoService.createCurso(form.value).subscribe(
      res=>{
        this.getCurso();
        form.reset();
      },
      err=> console.log(err)
    )}
  }

  deleteCurso(cveCurso:any){
    const resp= confirm('Estás seguro de eliminarlo?')
    console.log('eliminando'+cveCurso);
    if(resp){
      this.cursoService.deleteCurso(cveCurso).subscribe(
        (res)=>{
          this.getCurso;
        },
        (err)=> console.log(err)
      );
    }
  }

  editCurso(curso:Curso){
    this.cursoService.curso=curso;
  }

  formReset(form:NgForm){
    this.cursoService.curso=form.value;
    form.reset();
  }

}
