import * as internal from "stream";

export interface Curso{
    cveCurso?:number,
    cvePersona:number,
    nombre: string,
    descripcion:string,
    numHoras:number,
    activo:number,
    estatus:number,
    fechaCreado:string,
    fechaRevision:string,
    comentarios:string,
    tipoCurso:number
}