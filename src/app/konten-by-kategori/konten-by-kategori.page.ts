import { Component, OnInit } from '@angular/core';
import { WpIonicService } from '../shared/wp-ionic.service';
import { loadingController } from '@ionic/core';
import { LoadingController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-konten-by-kategori',
  templateUrl: './konten-by-kategori.page.html',
  styleUrls: ['./konten-by-kategori.page.scss'],
})
export class KontenByKategoriPage implements OnInit {

  Posts: any;
  page=1;

  constructor(
    private wpService: WpIonicService,
    private activatedRoute: ActivatedRoute,
    private loadingController: LoadingController
  ) { }

  ngOnInit() {
    this.initPosts();
  }

  async initPosts(){
    let loading = await this.loadingController.create({
      message: 'Sabar Kak ...'
    });
    await loading.present();
    let id = this.activatedRoute.snapshot.paramMap.get('categories');
    this.wpService.getByCategoriesVan(id).subscribe((data)=>{
      this.Posts = data;
      loading.dismiss();
    })
  }
  
  infiniteLoad(e) {
    this.page++;
 
    this.wpService.getAllPosts(this.page).subscribe((data) => {
      this.Posts = [...this.Posts, ...data];
      e.target.complete();
 
      // Disable loading when reached last
      if (this.page == this.wpService.pages) {
        e.target.disabled = true;
      }
    });
  }

}
