import { Component, OnInit } from '@angular/core';
import { SalaService } from '../../../sala.service';
import { Sala, DataSala } from '../../../interfaces/responsesala';

@Component({
  selector: 'app-sala',
  templateUrl: './sala.component.html',
  styleUrls: ['./sala.component.css']
})
export class SalaComponent implements OnInit {

  listaSalas!:Sala;
  data:DataSala[] = [];
  constructor(private salaService:SalaService) { }

  ngOnInit(): void {
    this.salaService.getAllSalas().subscribe((response) => {
      this.listaSalas = response;
      this.data = this.listaSalas.data!;
    })
    
  }

}
