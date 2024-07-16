import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';

@Component({
  selector: 'app-shared',
  standalone: true,
  imports: [CommonModule, RouterModule,HeaderComponent,
    FooterComponent,
    BodyComponent],
  templateUrl: './shared.component.html',
  styleUrl: './shared.component.scss'
})
export class SharedComponent {

}
