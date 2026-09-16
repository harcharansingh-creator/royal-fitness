import {
  Component,
  AfterViewInit,
  OnDestroy,
  PLATFORM_ID,
  inject
} from '@angular/core';

import { isPlatformBrowser } from '@angular/common';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar implements AfterViewInit, OnDestroy {

  menuOpen = false;
  isScrolled = false;
  activeSection = 'home';

  private platformId = inject(PLATFORM_ID);

  private scrollHandler = (): void => {

    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    this.isScrolled = window.scrollY > 40;

    this.updateActiveSection();

  };


  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }


  closeMenu(): void {
    this.menuOpen = false;
  }


  ngAfterViewInit(): void {

    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    window.addEventListener(
      'scroll',
      this.scrollHandler,
      { passive: true }
    );

    this.updateActiveSection();

  }


  private updateActiveSection(): void {

    const sections = [
      'home',
      'about',
      'services',
      'pricing',
      'gallery',
      'contact'
    ];

    const scrollPosition = window.scrollY + 150;

    for (const sectionId of sections) {

      const section = document.getElementById(sectionId);

      if (!section) {
        continue;
      }

      const sectionTop = section.offsetTop;
      const sectionBottom =
        sectionTop + section.offsetHeight;

      if (
        scrollPosition >= sectionTop &&
        scrollPosition < sectionBottom
      ) {

        this.activeSection = sectionId;

        break;

      }

    }

  }


  ngOnDestroy(): void {

    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    window.removeEventListener(
      'scroll',
      this.scrollHandler
    );

  }

}