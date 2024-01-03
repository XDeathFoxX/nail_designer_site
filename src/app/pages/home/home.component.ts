import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '/home/junior/Área de Trabalho/angular/ana-site/src/app/components/header/header.component';
import { BodyComponent } from '/home/junior/Área de Trabalho/angular/ana-site/src/app/components/body/body.component'
import { FooterComponent } from '/home/junior/Área de Trabalho/angular/ana-site/src/app/components/footer/footer.component';
import { WhatsbuttonComponent } from '/home/junior/Área de Trabalho/angular/ana-site/src/app/components/whatsbutton/whatsbutton.component';
import { ValorComponent } from '/home/junior/Área de Trabalho/angular/ana-site/src/app/components/valor/valor.component'

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, BodyComponent
    ,FooterComponent, WhatsbuttonComponent, ValorComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  title = 'ana-site';
}
