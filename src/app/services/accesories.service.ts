import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccesoriesService {
  
  private accesories: any [] =  [
    {
      nombre: "Cable usb tipo c",
      Desc: "Sin descripción",
      img: "assets/resource/img/1.png",
      precio:"$0.00",
      Marca:"Desconocido"
    },
    {
      nombre: "Cable usb 3.0",
      Desc: "Sin descripción",
      img: "assets/resource/img/2.png",
      precio:"$0.00",
      Marca: "Desconocido"
    },
    {
      nombre: "Cable HDMI",
      Desc: "Sin descripción",
      img: "assets/resource/img/3.png",
      precio:"$0.00",
      Marca:"Desconocido"
    },
    {
      nombre: "Memoria usb tipo c",
      Desc: "Sin descripción",
      img: "assets/resource/img/4.png",
      precio:"$0.00",
      Marca: "Desconocido"
    },
    {
      nombre: "Memoria usb 3.0",
      Desc: "Sin descripción",
      img: "assets/resource/img/5.png",
      precio:"$0.00",
      Marca: "Desconocido"
    },
    {
      nombre: "Memoria usb 2.0",
      Desc: "Sin descripción",
      img: "assets/resource/img/6.png",
      precio:"$0.00",
      Marca: "Desconocido"
    }
  ];

  constructor() { }


  getAccesorios(): Accesorio [] {
    return this.accesories;
  }
}


export interface Accesorio {
  nombre: string;
  Desc: string;
  img: string;
  precio: string;
  Marca: string;
}