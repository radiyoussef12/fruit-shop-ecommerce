import { Component } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HeroComponent } from './hero/hero.component';
import { ProudactComponent } from './proudact/proudact.component';
import { ShopComponent } from './pages/shop/shop.component';


@Component({
  selector: 'app-root',
  standalone: true, 
  imports: [
    
    ProudactComponent,
    HeroComponent,
    FooterComponent,
    HeaderComponent,
    RouterOutlet,
    RouterLink
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'site_ecomerc';
}
