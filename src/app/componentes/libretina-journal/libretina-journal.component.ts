import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicioService } from 'src/app/servicios/servicio.service';

@Component({
  selector: 'app-libretina-journal',
  templateUrl: './libretina-journal.component.html',
  styleUrls: ['./libretina-journal.component.css']
})
export class LibretinaJournalComponent implements OnInit {

  constructor(private servivio:ServicioService, private router:Router, private ruta:ActivatedRoute) { }

  ngOnInit(): void {
    this.ruta.params.subscribe(params => {
      this.id = params['id'];
      console.log(this.id);
    });
    this.getInfoLibretina();
  }
  libretina : any;
  id : any;
  getInfoLibretina(){
    this.servivio.getLibretina(this.id).subscribe(libretinas => this.libretina = libretinas);
    console.log(this.libretina);
  }

}
