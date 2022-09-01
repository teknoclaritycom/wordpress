import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KontenByKategoriPage } from './konten-by-kategori.page';

const routes: Routes = [
  {
    path: '',
    component: KontenByKategoriPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KontenByKategoriPageRoutingModule {}
