import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-insuranceServices',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './insService-section.component.html',
  styleUrl: './insService-section.component.scss'
})
export class InsServiceSectionComponent {

  cards=[
    {
      title:'Business Insurance',
      subtitle:'INSURANCE . VEHICLE',
      imgSrc:'https://static.vecteezy.com/system/resources/thumbnails/005/732/133/small_2x/small-asian-family-portrait-at-home-photo.jpg'
    },
    {
      title:'Vehicle Insurance',
      subtitle:'INSURANCE . VEHICLE',
      imgSrc:'https://www.shutterstock.com/image-photo/cheerful-little-girl-sitting-on-600nw-2226160685.jpg'
    },
    {
      title:'Car Insurance',
      subtitle:'INSURANCE . CAR',
      imgSrc:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5pbVhTDSrAmP--B6YNzKyI48-J1X-JI3xCQ&s'
    },
  ];
}
