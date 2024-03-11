import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router  } from '@angular/router';
import { ClienteService } from '../../services/cliente.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cliente-put',
  templateUrl: './cliente-put.component.html',
  styleUrls: ['./cliente-put.component.scss']
})
export class ClientePutComponent implements OnInit {
  putplanform: FormGroup;
  clienteId: number;

  constructor(
    private formBuilder: FormBuilder,
    private clienteService: ClienteService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.putplanform = this.formBuilder.group({
      nroDocumento: [''],
      clienteNombre: [''],
      clienteApellidos: [''],
      correoElectronico: [''],
      telefono: ['']
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.clienteId = +params['clienteId'];
      if (!this.clienteId) {
        console.error("clienteId no está definido.");
        // Puedes redirigir a una página de error o a donde consideres conveniente
        this.router.navigate(['/error']);
        return;
      }
      this.clienteService.read(this.clienteId).subscribe(cliente => {
        this.putplanform.patchValue({
          nroDocumento: cliente.nroDocumento,
          clienteNombre: cliente.clienteNombre,
          clienteApellidos: cliente.clienteApellidos,
          correoElectronico: cliente.correoElectronico,
          telefono: cliente.telefono
        });
      });
    });
  }

  updateCliente(): void {
    if (!this.clienteId) {
      console.error("clienteId no está definido.");
      return;
    }
  
    this.clienteService.update(this.clienteId, this.putplanform.value)
      .subscribe({
        next: (response) => {
          console.log(response);
          Swal.fire({
            title: 'Cliente Actualizado!',
            text: 'El Cliente se ha actualizado exitosamente.',
            icon: 'success'
          });
        },
        error: (error) => {
          console.error(error);
          Swal.fire({
            title: 'Error!',
            text: 'No se pudo actualizar el cliente.',
            icon: 'error'
          });
        }
      });
  }

}