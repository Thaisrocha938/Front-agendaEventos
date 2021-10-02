import { EventoService } from './../evento.service';
import { Evento } from './../evento.module';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-evento-read',
  templateUrl: './evento-read.component.html',
  styleUrls: ['./evento-read.component.css']
})
export class EventoReadComponent implements OnInit {

  eventos: Evento[] | undefined

  constructor(private eventoService: EventoService) { }

  ngOnInit(): void {
    this.eventoService.read().subscribe( eventos => {
      this.eventos = eventos
      console.log(eventos)
    })
  }

}
