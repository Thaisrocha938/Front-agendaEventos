import { Evento } from './../evento.module';
import { Router } from '@angular/router';
import { EventoService } from './../evento.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-evento-create',
  templateUrl: './evento-create.component.html',
  styleUrls: ['./evento-create.component.css']
})
export class EventoCreateComponent implements OnInit {

  evento: Evento = {
    data: new Date,
     horario: {
      hours: 16,
      minutes: 55
    },
    local: '',
    nome: ''
  }

  constructor(private eventoService: EventoService,
    private router: Router) { }

  ngOnInit(): void {
  }

  createEvento():void{
    this.eventoService.create(this.evento).subscribe(()=>{
      this.eventoService.showMessage('Evento Criado com Sucesso')
      this.router.navigate(['/eventos'])
    })
  }
  cancel(): void{
    this.router.navigate(['/eventos'])
  }
}
