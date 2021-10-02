import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-eventos-crud',
  templateUrl: './eventos-crud.component.html',
  styleUrls: ['./eventos-crud.component.css']
})
export class EventosCrudComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navegateToEventCreate(): void{
    this.router.navigate(['/eventos/create'])
  }
}
