import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirebaseService } from '../../core/services/firebase.service';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuPageComponent implements OnInit{
  menu: any[] = [];

  constructor(private fb: FirebaseService) {}

  ngOnInit(){
    this.fb.obtenerMenu().subscribe({
      next: (res:any) => {
        if(res) this.menu = Object.values(res);
        else this.setSample();
      },
      error: () => this.setSample()
    });
  }

  setSample(){
    this.menu = [
      { nombre: 'Pollo al Spiedo (entero)', descripcion: 'Jugoso pollo al spiedo', precio: 60, img: 'assets/images/pollo1.jpg' },
      { nombre: 'Broaster (mitad)', descripcion: 'Mitad de pollo crujiente', precio: 35, img: 'assets/images/pollo2.jpg' },
      { nombre: 'Alitas picantes', descripcion: 'Alitas con salsa especial', precio: 25, img: 'assets/images/pollo3.jpg' }
    ];
  }
}
