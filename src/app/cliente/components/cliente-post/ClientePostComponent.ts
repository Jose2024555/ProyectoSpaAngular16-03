import { ClienteService } from '../../services/cliente.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-cliente-post',
  templateUrl: './cliente-post.component.html',
  styleUrls: ['./cliente-post.component.scss']
})
export class ClientePostComponent implements OnInit {
  postserform!: FormGroup;

  submitted = false;
  constructor(private clienteService: ClienteService,
    public fb: FormBuilder) { }

  ngOnInit(): void {
    this.postserform = this.fb.group({
      clienteNombre: ['', Validators.required],
      clienteApellidos: ['', Validators.required],
      nroDocumento: ['', Validators.required],
      telefono: ['', Validators.required],
      correoElectronico: ['', Validators.required],
    });
  }

  createCliente(): void {
    const data = {
      clienteNombre: this.postserform.value.clienteNombre,
      clienteApellidos: this.postserform.value.clienteApellidos,
      nroDocumento: this.postserform.value.nroDocumento,
      telefono: this.postserform.value.telefono,
      correoElectronico: this.postserform.value.correoElectronico,
    };

    this.clienteService.create(data)
      .subscribe({
        next: (response) => {
          console.log(response);
          this.submitted = true;
          Swal.fire({
            title: 'Cliente Registrado!',
            text: 'El Cliente se ha registrado exitosamente.',
            icon: 'success'
          });
        },
        error: (error) => {
          console.log(error);
        }
      });
  }
}
