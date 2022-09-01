import { Component, OnInit } from '@angular/core';
import { WpIonicService } from '../shared/wp-ionic.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-beranda',
  templateUrl: './beranda.page.html',
  styleUrls: ['./beranda.page.scss'],
})
export class BerandaPage implements OnInit {

Posts = [];
Bisnis = [];
Sosmed = [];
postCount = null;
page = 1;

options = {
  slidesPerView : 1.3
};

  constructor(
    private wpService: WpIonicService,
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
 
    this.wpService.getAllPosts().subscribe((data) => {
      this.postCount = this.wpService.allPosts;
      this.Posts = data;
      this.wpService.getBisnisPosts().subscribe((data)=>{
        this.Bisnis = data;
        this.wpService.getSosmedPosts().subscribe((data)=>{
          this.Sosmed = data;
          loading.dismiss();
        })
      })      
    });
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
