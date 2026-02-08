import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { FirebaseService } from '../../core/services/firebase.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactPageComponent{
  form: any;
  success = '';

  constructor(private fb: FormBuilder, private service: FirebaseService){
    this.form = this.fb.group({
      nombre: ['', Validators.required],
      mensaje: ['', Validators.required]
    });
  }

  enviar(){
    if(this.form.invalid) return;
    this.service.guardarPedido(this.form.value).subscribe({
      next: ()=> { this.success = 'Mensaje enviado.'; this.form.reset(); },
      error: ()=> { this.success = 'Error, intenta luego.'; }
    });
  }
}
