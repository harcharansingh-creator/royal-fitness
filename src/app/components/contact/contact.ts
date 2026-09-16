import {
  Component,
  OnInit,
  OnDestroy,
  PLATFORM_ID,
  inject
} from '@angular/core';

import { isPlatformBrowser } from '@angular/common';

import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact implements OnInit, OnDestroy {

  contactForm: FormGroup;

  submitted = false;

  private platformId = inject(PLATFORM_ID);


  /*
   * Membership event handler
   */
  private membershipHandler = (event: Event): void => {

    const customEvent = event as CustomEvent<string>;

    const selectedPlan = customEvent.detail;

    this.contactForm.patchValue({
      service: selectedPlan
    });

  };


  constructor(private fb: FormBuilder) {

    this.contactForm = this.fb.group({

      name: [
        '',
        [
          Validators.required,
          Validators.minLength(2)
        ]
      ],

      email: [
        '',
        [
          Validators.required,
          Validators.email
        ]
      ],

      phone: [
        '',
        [
          Validators.required,
          Validators.pattern(/^[6-9]\d{9}$/)
        ]
      ],

      service: [
        '',
        Validators.required
      ],

      message: [
        '',
        [
          Validators.required,
          Validators.minLength(10)
        ]
      ]

    });

  }


  /*
   * Browser only
   */
  ngOnInit(): void {

    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    window.addEventListener(
      'membershipSelected',
      this.membershipHandler
    );

  }


  /*
   * Browser only cleanup
   */
  ngOnDestroy(): void {

    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    window.removeEventListener(
      'membershipSelected',
      this.membershipHandler
    );

  }


  /*
   * Submit form
   */
  onSubmit(): void {

    this.submitted = true;


    if (this.contactForm.invalid) {

      this.contactForm.markAllAsTouched();

      return;

    }


    const formData = this.contactForm.value;


    const message = `
Hello Royal Fitness,

I want to enquire about your membership.

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Service: ${formData.service}

Message:
${formData.message}
    `.trim();


    const whatsappNumber = '919999999999';


    const whatsappUrl =
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;


    /*
     * window only works in browser
     */
    if (isPlatformBrowser(this.platformId)) {

      window.open(
        whatsappUrl,
        '_blank',
        'noopener,noreferrer'
      );

    }


    this.contactForm.reset();

    this.submitted = false;

  }


  /*
   * Form controls
   */

  get name() {
    return this.contactForm.get('name');
  }


  get email() {
    return this.contactForm.get('email');
  }


  get phone() {
    return this.contactForm.get('phone');
  }


  get service() {
    return this.contactForm.get('service');
  }


  get message() {
    return this.contactForm.get('message');
  }

}