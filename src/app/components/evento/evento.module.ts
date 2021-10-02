import { Time } from "@angular/common";

export interface Evento{
    codigo?: number,
    data: Date,
    horario: Time,
    local: string,
    nome: string
}