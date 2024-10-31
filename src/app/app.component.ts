import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { HeroSectionComponent } from './heroSection/heroSection.component';
import { FeaturesComponent } from './features/features.component';
import { IncepComponent } from './incep/incep.component';
import { Calls } from './calls/calls.component';
import { FooterComponent } from './footer/footer.component';
import { InsServiceSectionComponent } from './insService-section/insService-section.component';
import { WhyChooseUsComponent } from './whyChooseUs/whyChooseUs.component';
import { ExpertTeamComponent } from './expteam-section/expteam-section.component';
import { Blogs } from './blogs/blogs.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NavbarComponent,HeroSectionComponent,FeaturesComponent,IncepComponent,Calls,FooterComponent,InsServiceSectionComponent,WhyChooseUsComponent,ExpertTeamComponent,Blogs],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'insurance';
  
}
