import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KontenByKategoriPageRoutingModule } from './konten-by-kategori-routing.module';

import { KontenByKategoriPage } from './konten-by-kategori.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KontenByKategoriPageRoutingModule
  ],
  declarations: [KontenByKategoriPage]
})
export class KontenByKategoriPageModule {}
