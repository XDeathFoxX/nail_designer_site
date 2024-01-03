import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ValorComponent } from '../../components/valor/valor.component'

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ValorComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  title = 'ana-site';
}
