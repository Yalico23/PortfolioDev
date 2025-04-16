import { Component } from '@angular/core';
import { GithubComponent } from '../../icons/github/Github.component';
import { CodeComponent } from '../../icons/code/code.component';
import { ComputerComponent } from '../../icons/computer/computer.component';
@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [GithubComponent,CodeComponent,ComputerComponent],
  templateUrl: './projects.component.html'
})
export class ProjectsComponent {

  proyectos = [
    {
      titulo: "DevWebCamp - Plataforma de administración de conferencias",
      description:
        "Plataforma para la administracion de conferencias, con servicios de pagos y visita del cliente a una web amigable y limpia",
      image: "./assets/img/project/devwebcamp.png",
      tags: [
        {
          name:"php",
          src:"./assets/icons/php_dark.svg",
          bg:'bg-[#000]'
        },
        {
          name:"Sass",
          src:"./assets/icons/sass.svg",
          bg:'bg-[#4d1b23]'
        },
        {
          name:"MySql",
          src:"./assets/icons/mysql.svg",
          bg:'bg-[#122535]'
        },
      ],
      Git: 'https://github.com/Yalico23/DevWebCamp',
      Preview : 'https://devwebcamp.yalicodev.online',
      arquitectura : ''
    },
    {
      titulo: "Calculadora de Propinas",
      description:
        "Este programa calcula automáticamente la propina y el costo total de una comida, permitiéndote ajustar el porcentaje de propina según tus preferencias.",
      image: "./assets/img/project/propina.webp",
      tags: [
        {
          name:"React",
          src:"./assets/icons/react_light.svg",
          bg:'bg-[#092327c9]'
        },
        {
          name:"Tailwind",
          src:"./assets/icons/tailwindcss.svg",
          bg:'bg-[#092327c9]'
        },
      ],
      Git: 'https://github.com/Yalico23/CalculadoraPropinas',
      Preview : 'https://calculadorapropinas.yalicodev.online',
      arquitectura : ''
    },
    {
      titulo: "Backend Factura (Desarrollo)",
      description:
        "Backend con Seguridad OAuth y JWT para la generacion de facturas, con un sistema de roles y permisos para el usuario.",
      image: "./assets/img/project/backend.png",
      tags: [
        {
          name:"Spring",
          src:"./assets/icons/spring.svg",
          bg:'bg-[#092327c9]'
        },
        {
          name:"Angular",
          src:"./assets/icons/angular.svg",
          bg:'bg-[#092327c9]'
        },
        {
          name:"JWT",
          src:"./assets/icons/jwt.svg",
          bg:'bg-[#092327c9]'
        },
        {
          name:"MySql",
          src:"./assets/icons/mysql.svg",
          bg:'bg-[#092327c9]'
        },
      ],
      Git: 'https://github.com/Yalico23/RepoFactura',
      Preview : '',
      arquitectura : ''
    },
  ]
}
