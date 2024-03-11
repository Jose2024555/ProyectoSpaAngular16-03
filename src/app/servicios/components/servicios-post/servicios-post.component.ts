import { ServiciosService } from '../services/servicios.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Servicio } from '../model/servicios';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-servicios-post',
  templateUrl: './servicios-post.component.html',
  styleUrls: ['./servicios-post.component.scss']
})
export class ServiciosPostComponent implements OnInit{
  postserform!: FormGroup;

  submitted =false;
  constructor(public serviciosService: ServiciosService,
    public fb: FormBuilder,
    ){}

   ngOnInit(): void{
    this.postserform = this.fb.group({
      nombreServicio: ['', Validators.required],
      descripcion: ['', Validators.required],
      duracion: ['', Validators.required],
      precio: [0, Validators.required],

    })
  }
  createServicios(): void {
    const data = {
      nombreServicio: this.postserform.value.nombreServicio,
      descripcion: this.postserform.value.descripcion,
      duracion: this.postserform.value.duracion,
      precio: this.postserform.value.precio,

    };
     this.serviciosService.create(data)
       .subscribe({
         next: (response) => {
         console.log(response);
         this.submitted = true;
         Swal.fire({
          title: 'Servicio Registrado!',
          text: 'El Servicio se ha registrado exitosamente.',
          icon: 'success'
        });
         },

         error:(error)  => {

         console.log(error);
         }
  })

 }

}
