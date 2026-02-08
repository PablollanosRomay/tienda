import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FirebaseService } from '../../core/services/firebase.service';

@Component({
  selector: 'app-pedidos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosPageComponent{
  pedido = { producto: '', cantidad: 1 };
  success = '';

  constructor(private service: FirebaseService){}

  guardarPedido(f:any){
    this.service.guardarPedido(f).subscribe({
      next: ()=> { this.success = 'Pedido guardado.'; this.pedido = { producto: '', cantidad: 1 }; },
      error: ()=> { this.success = 'Error guardando pedido.'; }
    });
  }
}
