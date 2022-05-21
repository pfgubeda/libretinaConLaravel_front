import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicioService } from 'src/app/servicios/servicio.service';

export interface Libretina{
  nombre:string;
  apellido:string;
  url_foto:string;
}

@Component({
  selector: 'app-add-libretina',
  templateUrl: './add-libretina.component.html',
  styleUrls: ['./add-libretina.component.css']
})

export class AddLibretinaComponent implements OnInit {

  constructor(private servivio:ServicioService, private router:Router) { }

  ngOnInit(): void {
  }

  guardarLibretina(nombre:any, apellido:any, url_foto:any){
    const libretina: Libretina = {
      nombre:nombre,
      apellido:apellido,
      url_foto:url_foto
  };
  console.log(libretina);

  this.servivio.createLibretina(libretina).subscribe();
  this.router.navigate(['./']);
}

}
