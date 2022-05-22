import { Component, OnInit } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicioService } from 'src/app/servicios/servicio.service';

@Component({
  selector: 'app-libretina-journal',
  templateUrl: './libretina-journal.component.html',
  styleUrls: ['./libretina-journal.component.css']
})
export class LibretinaJournalComponent implements OnInit {

  constructor(private servivio:ServicioService, private router:Router, private ruta:ActivatedRoute) { }



  fechaHoy: Date = new Date();
  ngOnInit(): void {
    this.ruta.params.subscribe(params => {
      this.id = params['id'];
      console.log(this.id);
    });
    this.getInfoLibretina();
  }
  notashorarios:any;
  libretina : any;
  id : any;
  getInfoLibretina(){
    this.servivio.getLibretina(this.id).subscribe(libretinas => this.libretina = libretinas);
    this.servivio.getNotasHorarioFecha(this.id, this.fechaHoy).subscribe(notashorario => this.notashorarios = notashorario);
    console.log(this.id, this.fechaHoy);
    console.log(this.notashorarios);
  }


  addNuevaNotaNav(id:any, fecha:any){
    console.log(fecha);
  }


}
