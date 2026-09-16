import { Component } from '@angular/core';

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [],
  templateUrl: './pricing.html',
  styleUrl: './pricing.css'
})
export class Pricing {

  plans = [
    {
      name: 'BASIC',
      price: '₹999',
      period: '/ MONTH',
      description: 'Perfect for beginners starting their fitness journey.',
      features: [
        'Gym Access',
        'Basic Workout Plan',
        'Cardio Area Access',
        'Locker Facility',
        'Fitness Assessment'
      ],
      featured: false
    },

    {
      name: 'PRO',
      price: '₹1,999',
      period: '/ MONTH',
      description: 'For serious members who want faster results.',
      features: [
        'Everything in Basic',
        'Personalized Workout Plan',
        'Diet Guidance',
        'Progress Tracking',
        'Trainer Support',
        'Group Training'
      ],
      featured: true
    },

    {
      name: 'PREMIUM',
      price: '₹3,499',
      period: '/ MONTH',
      description: 'Complete premium fitness experience with personal coaching.',
      features: [
        'Everything in Pro',
        'Personal Training',
        'Advanced Diet Plan',
        'Weekly Progress Review',
        'Priority Trainer Support',
        'Premium Facilities'
      ],
      featured: false
    }
  ];


  selectPlan(planName: string): void {

    const serviceMap: { [key: string]: string } = {
      'BASIC': 'Basic Membership',
      'PRO': 'Pro Membership',
      'PREMIUM': 'Premium Membership'
    };

    const selectedService = serviceMap[planName];

    if (!selectedService) {
      return;
    }

    localStorage.setItem(
      'selectedMembership',
      selectedService
    );

    window.location.hash = 'contact';

    setTimeout(() => {

      window.dispatchEvent(
        new CustomEvent('membershipSelected', {
          detail: selectedService
        })
      );

    }, 300);
  }

}