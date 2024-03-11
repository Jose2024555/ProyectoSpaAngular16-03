import { Servicio } from './../model/servicios';
import { ServiciosService } from '../services/servicios.service';
import { Component,  OnInit  } from '@angular/core';
import Swal  from 'sweetalert2';

@Component({
  selector: 'app-servicios-get',
  templateUrl: './servicios-get.component.html',
  styleUrls: ['./servicios-get.component.scss']
})
export class ServiciosGetComponent  implements OnInit{
  listservicios: Servicio[] =[];
  currentIndex = -1;
  nombreServicio ='';

  submitted =false;
  constructor(private serviciosService: ServiciosService){}
  ngOnInit(): void {
    this.list();
  }

  list():void{
    this.serviciosService.readAll()
    .subscribe({
      next: (servicios) => {
        this.listservicios = servicios;
        console.log(servicios);
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
     this.listservicios = [];
     this.serviciosService.readAll()
       .subscribe(
         res => {
           this.listservicios = res;
         },
         err => {

         }
       );
   }

   delete(Servicio: any) {
    console.log(Servicio)
    this.serviciosService.delete(Servicio.servicioId).subscribe(res => {
            console.log(res);
            Swal.fire({
              title:'Atenccion !!',
              text: '¿Está seguro que desea eliminar el servicio?',
              showCloseButton: true,
              showCancelButton: true
            }).then((willDelete) => {
              console.log(willDelete);
              if (willDelete.value) {
                this.serviciosService.delete(0).subscribe({
                  next: (response) => {
                    console.log(response);
                    Swal.fire('ok!', 'Registro eliminado satisfactoriamente', 'success')
                    .then(() => {
                      this.getAllData();
                    });
                  },
                  error: () => {
                    Swal.fire('Error!', 'No se puedo borrar el proveedor', 'error');
                  }
                });
              }
          });
        });

}
}
