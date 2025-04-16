import { Component } from '@angular/core';

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [],
  templateUrl: './timeline.component.html'
})
export class TimelineComponent {
  workExperience = [
    {
      empresa: "Healthy Rife Food Group S.a.C",
      cargo: "Java Developer",
      fecha: "2025",
      descripcion:"Encargado de la implementación de un software para automatizar entrevistar usando servicios de la nube, Angular, Spring y sus variantes"
    },
    {
      empresa: "RicPlast S.A.C",
      cargo: "Java  Developer",
      fecha: "2022",
      descripcion:"Cumpliendo con los módulos asignados en un software monolitico para una empresa de venta de plástico"
    },
  ];
}
