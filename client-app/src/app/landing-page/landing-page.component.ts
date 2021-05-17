import { Component, OnInit } from '@angular/core';

declare const $;
@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  constructor() { }

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
  }

}
