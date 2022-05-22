import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ServicioService } from 'src/app/servicios/servicio.service';


export interface Nota{
  titulo:string;
  descripcion:string;
}
@Component({
  selector: 'app-nueva-nota',
  templateUrl: './nueva-nota.component.html',
  styleUrls: ['./nueva-nota.component.css']
})
export class NuevaNotaComponent implements OnInit {

  constructor(private servivio:ServicioService, private router:Router, private ruta:ActivatedRoute) { }

  id : any;
  fecha:any;
  libretina : any;
  ngOnInit(): void {
    this.ruta.params.subscribe(params => {
      this.id = params['id'];
      this.fecha = params['fecha'];
    }
    );
    this.getInfoLibretina();
  }
  getInfoLibretina(){
    this.servivio.getLibretina(this.id).subscribe(libretinas => this.libretina = libretinas);
    console.log(this.id, this.fecha);
  }
  addNota(titulo:any, descripcion:any){
    const nota: Nota = {
      titulo:titulo,
      descripcion:descripcion,
  };
  this.servivio.createNota(this.id, this.fecha, nota).subscribe();
  this.router.navigate(['./']);
}
}
