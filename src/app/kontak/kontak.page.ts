import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { WpIonicService } from '../shared/wp-ionic.service';

@Component({
  selector: 'app-kontak',
  templateUrl: './kontak.page.html',
  styleUrls: ['./kontak.page.scss'],
})
export class KontakPage implements OnInit {

  DetailPage = [];
  constructor(private wpService: WpIonicService, private loadingx: LoadingController) { }

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
