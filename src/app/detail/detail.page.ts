import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WpIonicService } from '../shared/wp-ionic.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  postDetail: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private wpService: WpIonicService,
  ) { }

  ngOnInit() {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    this.wpService.postDetails(id).subscribe((data)=>{
      this.postDetail = data;
    });
  }
  goToOrgPost() {
    window.open(this.postDetail.link, '_blank');
  }  
}
