import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-whyUs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './whyChooseUs.component.html',
  styleUrl: './whyChooseUs.component.scss'
})
export class WhyChooseUsComponent {
  features=[
    'Protective Protection',
    'Money Back Guarantee',
    'Homeowner Insurance',
    'Partnership System',
    'Consultations',
    'Safety Ensure'
  ]
}
