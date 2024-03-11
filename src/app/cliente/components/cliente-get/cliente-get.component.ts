import { Cliente } from '../../model/cliente';
import { ClienteService } from '../../services/cliente.service';
import { Component,  OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal  from 'sweetalert2';


@Component({
  selector: 'app-cliente-get',
  templateUrl: './cliente-get.component.html',
  styleUrls: ['./cliente-get.component.scss']
})
export class ClienteGetComponent  implements OnInit{

  listcliente: Cliente[] = [];
  currentIndex = -1;
  clienteApellidos = '';
  nroDocumento = '';
  telefono = '';
  correoElectronico = '';


  submitted =false;
  constructor(private clienteService: ClienteService,
    private route: ActivatedRoute,
    private router: Router){}
  ngOnInit(): void {
    this.list();
  }

  list():void{
    this.clienteService.readAll()
    .subscribe({
      next: (cliente) => {
        this.listcliente = cliente;
        console.log(cliente);
      },
      error: (error) => {
        console.log(error);
      }

    });
  }
  refresh(): void {

    this.list();
    this.currentIndex = -1;
  }

  getAllData(): void {
    this.listcliente = [];
    this.clienteService.readAll()
      .subscribe(
        res => {
          this.listcliente = res;
        },
        err => {

        }
      );
  }

  delete(Cliente: any) {
    console.log(Cliente);
    this.clienteService.delete(Cliente.clienteId).subscribe(res => {
      console.log(res);
      Swal.fire({
        title: 'Atención !!',
        text: '¿Está seguro que desea eliminar el cliente?',
        showCloseButton: false,
        showCancelButton: true
      }).then((willDelete) => {
        console.log(willDelete);
        if (willDelete.value) {
          this.clienteService.delete(0).subscribe({
            next: (response) => {
              console.log(response);
              Swal.fire('¡Ok!', 'Registro eliminado satisfactoriamente', 'success')
                .then(() => {
                  this.getAllData();
                });
            },
            error: () => {
              Swal.fire('Error!', 'No se pudo borrar el cliente', 'error');
            }
          });
        }
      });
    });
  }

  obtenerid(Cliente: any) {
    const clienteId = Cliente.clienteId; // Obtener el ID del cliente
  
    // Redirigir a la página de detalles del cliente
    this.router.navigate(['/clienteput', clienteId]); // Reemplaza '/clienteget' con tu ruta correcta
  }
}
