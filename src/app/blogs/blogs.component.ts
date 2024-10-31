import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-blogsAndNews',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.scss'
})
export class Blogs {
blogs=[
  {
    image:'https://origin-cdnh.policyboss.com/website/UI22/images/insurance-landing-page/car-insurance-banner-image.svg',
    title:'What Is Personal Liability Umberella Coverage',
    subtitle:'BY ADMIN | INSURANCE',
    date:'14 AUG 2021'
  },
  {
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh2W_6mUa1ecQx8iIBC4zQsJub6A_gQJg47g&s',
    title:'Insurance Covers Risk of Fire Abserce of Fire insurance',
    subtitle:'BY ADMIN | INSURANCE',
    date:'14 AUG 2021'
  },
  {
    image:'https://www.shutterstock.com/image-photo/happy-family-sitting-on-sofa-260nw-580450771.jpg',
    title:'Ambulance Cover Of Fire On Insurance Serving',
    subtitle:'BY ADMIN | INSURANCE',
    date:'14 AUG 2021'
  }
]
}
