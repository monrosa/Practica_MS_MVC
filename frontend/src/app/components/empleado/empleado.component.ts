import { Component, OnInit } from '@angular/core';
import { EmpleadoService } from 'src/app/services/empleado.service';
import { Empleado } from 'src/app/models/empleado'
import { NgForm} from '@angular/forms'

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit{
  constructor(public empleadoService:EmpleadoService) { }
  empleado: Empleado[] = [];
  ngOnInit(): void {
    this.getEmpleados();
  }

  getEmpleados()
  {
    this.empleadoService.getEmpleados().subscribe(
    res=>{
      this.empleadoService.empleados=res;
    },
    err=>console.error(err));
  }

  addEmpleado(form:NgForm){
    this.empleadoService.createEmpleado(form.value).subscribe(
      res=>{
        this.getEmpleados();
        form.reset;
    },
      err=>console.error(err)
    );
  }
}
