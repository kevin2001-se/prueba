import { Component, OnInit } from '@angular/core';
import { Proveedor } from 'src/app/models/proveedor.model';
import { Ubigeo } from 'src/app/models/ubigeo.model';
import { ProveedorService } from '../../services/proveedor.service';
import { UbigeoService } from '../../services/ubigeo.service';

@Component({
  selector: 'app-add-proveedor',
  templateUrl: './add-proveedor.component.html',
  styleUrls: ['./add-proveedor.component.css']
})
export class AddProveedorComponent implements OnInit {

  constructor(private proveedorServicio:ProveedorService,private ubigeoServicio:UbigeoService) { }

  departamento:string[]=[];
  provincias:string[] = [];
  distrito:Ubigeo[]= []

  proveedor:Proveedor = {
    idProveedor: 0,
    razonsocial: "",
    ruc: "",
    direccion: "",
    telefono: "",
    celular: "",
    contacto: "",
    ubigeo: {
      idUbigeo:0,
      departamento:"",
      provincia:"",
      distrito:""
    },
    estado: 0
  }

  ngOnInit(): void {
    this.ubigeoServicio.listarDepartamento().subscribe( resp => this.departamento = resp )
  }

  obtenerProvincias(){
    this.ubigeoServicio.listaProvincias(this.proveedor.ubigeo?.departamento).subscribe( resp => this.provincias = resp)
  }

  obtenerDistrito(){
    this.ubigeoServicio.listaDistritos(this.proveedor.ubigeo?.departamento,this.proveedor.ubigeo?.provincia).subscribe(resp => this.distrito = resp)
  }

  agregarProveedor(){

    this.proveedorServicio.agregarProveedor(this.proveedor).subscribe(resp=> {
      console.log(resp);
      alert("Proveedor Registrado")
    })

  }

}
