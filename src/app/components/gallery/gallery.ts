import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [],
  templateUrl: './gallery.html',
  styleUrl: './gallery.css'
})
export class Gallery {

  selectedImage: string | null = null;

  images = [
    '/images/gallery/gym-1.jpg',
    '/images/gallery/gym-2.jpg',
    '/images/gallery/gym-3.jpg',
    '/images/gallery/gym-4.jpg',
    '/images/gallery/gym-5.jpg',
    '/images/gallery/gym-6.jpg'
  ];

  openImage(image: string): void {
    this.selectedImage = image;
  }

  closeImage(): void {
    this.selectedImage = null;
  }
}