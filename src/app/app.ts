import { Component, AfterViewInit, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

import { Navbar } from './components/navbar/navbar';
import { Hero } from './components/hero/hero';
import { AboutPreview } from './components/about-preview/about-preview';
import { Services } from './components/services/services';
import { WhyChoose } from './components/why-choose/why-choose';
import { Pricing } from './components/pricing/pricing';
import { Gallery } from './components/gallery/gallery';
import { Testimonials } from './components/testimonials/testimonials';
import { Contact } from './components/contact/contact';
import { Footer } from './components/footer/footer';
import { Loader } from './components/loader/loader';
import { GymInfo } from './components/gym-info/gym-info';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    Navbar,
    Hero,
    AboutPreview,
    Services,
    WhyChoose,
    Pricing,
    Gallery,
    Testimonials,
    Contact,
    Footer,
    Loader,
    GymInfo
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements AfterViewInit {

  private platformId = inject(PLATFORM_ID);

  ngAfterViewInit(): void {

    // Run browser-only code
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const elements = document.querySelectorAll('.reveal');

    const observer = new IntersectionObserver(
      (entries) => {

        entries.forEach((entry) => {

          if (entry.isIntersecting) {

            entry.target.classList.add('active');

            observer.unobserve(entry.target);

          }

        });

      },
      {
        threshold: 0.15
      }
    );

    elements.forEach((element) => {
      observer.observe(element);
    });

  }

}