import { Injectable } from '@angular/core';
import{HttpClient, HttpHeaders, HttpRequest} from '@angular/common/http';

export interface Libretina{
  nombre:string;
  apellido:string;
  url_foto:string;
}
export interface Nota{
  titulo:string;
  descripcion:string;
  fecha : string;
  tipo : string;
  libretina_id : string;
}
const API_URL = 'http://localhost:8000';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  
  constructor(private http:HttpClient) { }

  getAllLibretinas(){
    return this.http.get(API_URL+'/api/libretina');
  }
  getLibretina(id:any){
    return this.http.get(API_URL+'/api/libretina/'+id);
  }
  createLibretina(libretina:Libretina){
    return this.http.post(API_URL+'/api/libretina',libretina);
  }
  getNotasHorarioFecha(id_libretina:any, fecha:any){
    return this.http.get(API_URL+'/api/nota/'+id_libretina+'/'+fecha);
  }
  createNota(id_libretina:any, fecha:any, nota:any){
    return this.http.post(API_URL+'/api/nota/'+id_libretina+'/'+fecha,nota);
  }
}
