export interface Actividad{
    cveActividad?:number,
    cveTema:number,
    nombre:string,
    contenido:string,
    tipo:number,
    estatus:number,
    cveTemaPrerequisito:number,
    orden:number,
    intentos:number
}