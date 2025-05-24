import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { NombreService } from '../../services/nombre.service';

@Component({
  selector: 'app-bienvenida',
  templateUrl: './bienvenida.component.html',
  styleUrls: ['./bienvenida.component.css']
})
export class BienvenidaComponent implements OnInit {

  mostrar: boolean = true;

  nombre: string = "";

  @Output() readonly iniciarEvent = new EventEmitter<string>();

  constructor(private nombreService: NombreService) { }

  ngOnInit(): void {
  }

  iniciar(): void {
    this.nombreService.setNombre(this.nombre);
    this.iniciarEvent.emit(this.nombre);
    this.mostrar = false;
  }
}
