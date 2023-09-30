import {Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Empleado} from '../models/empleado'
// import { ConsoleReporter } from 'jasmine';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  URL_API='http://localhost:3000/api/empleados';
  empleados: Empleado[] = [];
  selectedEmpleado: Empleado={
    nombre:'',
    cargo:'',
    departamento:'',
    sueldo:0
  }
  constructor(private http: HttpClient) { }
  
  getEmpleados(){
    console.log('');
      return this.http.get<Empleado[]>(this.URL_API);
  }

  createEmpleado(empleado:Empleado){
    console.log('add empleado');
    return this.http.post(this.URL_API,empleado);
  }

  // constructor() { }
}
