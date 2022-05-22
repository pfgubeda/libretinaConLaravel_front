import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddLibretinaComponent } from './componentes/add-libretina/add-libretina.component';
import { LibretinaJournalComponent } from './componentes/libretina-journal/libretina-journal.component';
import { LibretinasComponent } from './componentes/libretinas/libretinas.component';
import { NuevaNotaComponent } from './componentes/nueva-nota/nueva-nota.component';

const routes: Routes = [
  {path:'', component: LibretinasComponent},
  {path:'add', component: AddLibretinaComponent},
  {path:':id', component: LibretinaJournalComponent},
  {path:':id/:fecha', component: NuevaNotaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
