import { Component, OnInit } from '@angular/core';
import { TemaService } from './../../services/tema.service';
import { NgForm } from '@angular/forms';
import { Tema } from 'src/models/tema';

@Component({
  selector: 'app-ver-temas',
  templateUrl: './ver-temas.component.html',
  styleUrls: ['./ver-temas.component.css']
})
export class VerTemasComponent implements OnInit {

  constructor(public temaService:TemaService) { }

  ngOnInit(): void {
    this.getTema();
  }

  getTema(){
    this.temaService.getTema().subscribe(
      res=> {
        this.temaService.temas= res;
        console.log(res);
      },
      err=> console.log(err)
    )
  }

  createTema(form:NgForm){
    if(form.value.cveTema){
      alert('actualizando');
      this.temaService.editTema(form.value).subscribe(
        res=> console.log(res),
        err=> console.log(err)
      );
    }else{
    this.temaService.createTema(form.value).subscribe(
      res=>{
        this.getTema();
        form.reset();
      },
      err=> console.log(err)
    )}
  }

  deleteTema(cveTema:any){
    const resp= confirm('Estás seguro de eliminarlo?')
    console.log('eliminando'+cveTema);
    if(resp){
      this.temaService.deleteTema(cveTema).subscribe(
        (res)=>{
          this.getTema;
        },
        (err)=> console.log(err)
      );
    }
  }

  editTema(tema:Tema){
    this.temaService.tema=tema;
  }

  formReset(form:NgForm){
    this.temaService.tema=form.value;
    form.reset();
  }

}
