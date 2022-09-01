import { Component, OnInit } from '@angular/core';
import { WpIonicService } from '../shared/wp-ionic.service';
import { loadingController } from '@ionic/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-kategori',
  templateUrl: './kategori.page.html',
  styleUrls: ['./kategori.page.scss'],
})
export class KategoriPage implements OnInit {
  
  Kategori =[];
  page=1;
  constructor(
    private wpService : WpIonicService,
    private loadingController : LoadingController
  ) { }

  ngOnInit() {
    this.initCategories();
  }

  async initCategories(){
    let loading = await this.loadingController.create({
      message: 'Sabar Kak ...'
    });
    await loading.present();
    this.wpService.getCategories().subscribe((data)=>{
      this.Kategori = data;
      loading.dismiss();
    })
  }

}
