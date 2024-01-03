import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-valor',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './valor.component.html',
  styleUrl: './valor.component.css'
})
export class ValorComponent {

  @Input()
  nome:string = ""

  @Input()
  valor:string = ""
}
