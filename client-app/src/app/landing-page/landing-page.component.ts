import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Banner, GetBannersResponse, GET_BANNERS_API } from '../_api/landing-page.api';

declare const $;
@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  banners: Array<Banner> = []

  constructor(private readonly http: HttpClient) { }

  ngOnInit(): void {
    if ($.fn.owlCarousel) {
      $(".karl-testimonials-slides").owlCarousel({
        items: 1,
        margin: 0,
        loop: true,
        dots: true,
        autoplay: true,
        smartSpeed: 1200
      });
    }

    this.fetchBanners()
  }

  fetchBanners() {
    this.http.get<GetBannersResponse>(GET_BANNERS_API).subscribe(res => this.banners = res.data)
  }
}
