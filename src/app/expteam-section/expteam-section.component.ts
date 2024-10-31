import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-expteams',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './expteam-section.component.html',
  styleUrl: './expteam-section.component.scss'
})
export class ExpertTeamComponent {
teamMembers=[
  {
    name:'Mesiva Scott',
    role:'Marketing Ex.',
    image:'https://t4.ftcdn.net/jpg/02/14/74/61/360_F_214746128_31JkeaP6rU0NzzzdFC4khGkmqc8noe6h.jpg',
    socials: ['https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/2023_Facebook_icon.svg/2048px-2023_Facebook_icon.svg.png',
       'https://cdn-icons-png.flaticon.com/512/2496/2496110.png', 
       'https://img.freepik.com/premium-vector/instagram-logo-vector_768467-330.jpg?semt=ais_hybrid', 
       'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRokEYt0yyh6uNDKL8uksVLlhZ35laKNQgZ9g&s']
    
  },
  {
    name: 'Jason Thomson',
    role: 'Marketing Ex.',
    image: 'https://img.freepik.com/free-photo/handsome-bearded-guy-posing-against-white-wall_273609-20597.jpg',
    socials: ['https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/2023_Facebook_icon.svg/2048px-2023_Facebook_icon.svg.png',
      'https://cdn-icons-png.flaticon.com/512/2496/2496110.png', 
      'https://img.freepik.com/premium-vector/instagram-logo-vector_768467-330.jpg?semt=ais_hybrid', 
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRokEYt0yyh6uNDKL8uksVLlhZ35laKNQgZ9g&s']
   
  },
  {
    name: 'Kohn Wright',
    role: 'Marketing Ex.',
    image: 'https://img.freepik.com/free-photo/human-face-expressions-emotions-positive-joyful-young-beautiful-female-with-fair-straight-hair-casual-clothing_176420-15188.jpg?semt=ais_hybrid',
   
      socials: ['https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/2023_Facebook_icon.svg/2048px-2023_Facebook_icon.svg.png',
        'https://cdn-icons-png.flaticon.com/512/2496/2496110.png', 
        'https://img.freepik.com/premium-vector/instagram-logo-vector_768467-330.jpg?semt=ais_hybrid', 
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRokEYt0yyh6uNDKL8uksVLlhZ35laKNQgZ9g&s']
     
  },
  {
    name: 'Andrew Schimke',
    role: 'Marketing Ex.',
    image: 'https://img.freepik.com/free-photo/handsome-bearded-guy-posing-against-white-wall_273609-20597.jpg',
    socials: ['https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/2023_Facebook_icon.svg/2048px-2023_Facebook_icon.svg.png',
      'https://cdn-icons-png.flaticon.com/512/2496/2496110.png', 
      'https://img.freepik.com/premium-vector/instagram-logo-vector_768467-330.jpg?semt=ais_hybrid', 
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRokEYt0yyh6uNDKL8uksVLlhZ35laKNQgZ9g&s']
   
  }
]
}
