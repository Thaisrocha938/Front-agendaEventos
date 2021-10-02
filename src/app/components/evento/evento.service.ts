import { Evento } from './evento.module';
import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventoService {

  baseUrl= {
    criarEvento:"http://localhost:8080/agenda/criar_evento", 
    visualizarEvento: "http://localhost:8080/agenda/eventos"}

  constructor(private snackBar: MatSnackBar, 
    private http: HttpClient) { }

  showMessage(msg: string): void{
    this.snackBar.open(msg, '', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition:"top"
    })
  }

 
  create(evento: Evento): Observable<Evento>{
    return this.http.post<Evento>(this.baseUrl.criarEvento, evento)
  }

  read(): Observable<Evento[]>{
    return this.http.get<Evento[]>(this.baseUrl.visualizarEvento)
  }
}
