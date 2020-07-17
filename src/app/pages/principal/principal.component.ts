import { Component, OnInit } from '@angular/core';
import { AccesoriesService, Accesorio } from '../../services/accesories.service';


@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  accesorios:Accesorio[] = []; 

  constructor(private _accesoriesService: AccesoriesService) { }

  ngOnInit(): void {
    this.accesorios = this._accesoriesService.getAccesorios();
  }
  
}
