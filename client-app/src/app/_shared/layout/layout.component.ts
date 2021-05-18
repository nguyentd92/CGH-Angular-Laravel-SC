import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DiscountProgram, GetDiscountProgramsResponse, GET_DISCOUNT_PROGRAMS_API } from 'src/app/_api/landing-page.api';

declare const $;

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  discountPrograms: Array<DiscountProgram> = [];

  constructor(private readonly http: HttpClient) { }

  ngOnInit(): void {
    window.addEventListener('click', () => {
      document.querySelector('body').classList.remove('cart-data-open');
    });

    document.querySelector('#header-cart-btn').addEventListener('click', () => event.stopPropagation())

    document.querySelector('.cart-list').addEventListener('click', () => event.stopPropagation())

    document.querySelector('#sideMenuBtn').addEventListener('click', () => {
      document.querySelector('#wrapper').classList.add('karl-side-menu-open');
    })

    document.querySelector('#sideMenuClose').addEventListener('click', () => {
      document.querySelector('#wrapper').classList.remove('karl-side-menu-open');
    })

    this.fetchDiscountPrograms();
  }

  fetchDiscountPrograms() {
    this.http.get<GetDiscountProgramsResponse>(GET_DISCOUNT_PROGRAMS_API).subscribe(res => this.discountPrograms = res.data)
  }

  toggleCart() {
    document.querySelector('body').classList.add('cart-data-open');
  }
}
