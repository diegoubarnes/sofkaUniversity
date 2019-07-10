import { Component, OnInit } from '@angular/core';
import { ConexionServiceService } from '../body/conexion-servicio.service';
import { Sofkiano } from '../body/sofkiano'

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  sofkiano: Sofkiano[];

  constructor(private Sofkianoservice: ConexionServiceService ) { }

  ngOnInit() {
    this.Sofkianoservice.getDatos().subscribe(
      sofkiano => this.sofkiano = sofkiano
    );
  }

}
