import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicioService } from 'src/app/servicios/servicio.service';

@Component({
  selector: 'app-libretinas',
  templateUrl: './libretinas.component.html',
  styleUrls: ['./libretinas.component.css']
})

export class LibretinasComponent implements OnInit {

  constructor(private servicio:ServicioService, private router:Router) { }

  libretinas:any;
  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this.servicio.getAllLibretinas().subscribe(libretinass => this.libretinas = libretinass);
    
  }

  navAddLibretina(){
    this.router.navigate(['/add']);
  }

  navLibretina(id:any){
    this.router.navigate(['/'+id]);
  }
}
