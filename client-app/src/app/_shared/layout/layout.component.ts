import { Component, OnInit } from '@angular/core';

declare const $;

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  constructor() { }

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
  }

  toggleCart() {
    document.querySelector('body').classList.add('cart-data-open');
  }
}
