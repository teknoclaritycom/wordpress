import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-tentang',
  templateUrl: './tentang.page.html',
  styleUrls: ['./tentang.page.scss'],
})
export class TentangPage implements OnInit {

  constructor(private loadingx: LoadingController) { }

  ngOnInit() {
    this.loading();
  }

  async loading(){
    let loading = await this.loadingx.create({
      message: 'Sabar Kak ...'
    });
    await loading.present();
    loading.dismiss(); 
  }

}
