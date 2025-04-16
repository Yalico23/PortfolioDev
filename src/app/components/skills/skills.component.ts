import { Component } from '@angular/core';
import { CommonModule} from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html'
})

export class SkillsComponent {


  ngOnInit(): void {

  }
  skillBackend = [
    {
      "name": "Spring Boot",
      "icon": "assets/icons/spring.svg",
      "description": "Manejo de aplicaciones monolíticas y microservicios usando Spring Boot con JPA/Hibernate, arquitectura limpia, DTOs y Thymeleaf para el desarrollo de interfaces web."
    },
    {
      "name": "Spring WebFlux",
      "icon": "assets/icons/spring.svg",
      "description": "Framework reactivo de Spring para aplicaciones no bloqueantes y altamente escalables con soporte para WebSockets, Server-Sent Events (SSE) y RESTful APIs asíncronas. Es ideal para sistemas con alta concurrencia y tiempo real, manteniendo una arquitectura limpia y el uso de DTOs",
    },
    {
      "name": "Spring Security",
      "icon": "assets/icons/spring.svg",
      "description": "Integro autenticación y autorización, facilitando la integración con OAuth2 y JWT para proteger tus aplicaciones. Permite gestionar el acceso a recursos y asegurar la comunicación en arquitecturas de microservicios, usando tokens para autenticación segura."
    },
    {
      "name": "Spring Cloud",
      "icon": "assets/icons/spring.svg",
      "description": "Construcción de aplicaciones distribuidas, proporcionando herramientas como OpenFeign y WebClient para la comunicación entre microservicios. Con Eureka, implementas balanceo de carga y descubrimiento de servicios. Integración de API Gateway para enrutar solicitudes, Resilience4J para la resiliencia y Spring Cloud Config Server para gestionar configuraciones centralizadas. Además, Micrometer Tracing te ayuda a implementar trazabilidad distribuida para monitorizar el flujo de las solicitudes."
    },
    {
      "name": "Php",
      "icon": "assets/icons/php.svg",
      "description": "Creación de aplicacion con Php puro, para desarrollo de aplicaciones web funcionales."
    },
    {
      "name": "Node JS",
      "icon": "assets/icons/nodejs.svg",
      "description": "Creaion de Frontend y Backend con Node JS, para desarrollo de aplicaciones web funcionales con seguridad JWT."
    }

  ];

  skillsFrontend = [
    {
      "name": "angular",
      "icon": "assets/icons/angular.svg",
      "description": "Integracion de interfaces funcionales usando Tailwind CSS o Boostrap, con proteccion de rutas y consumo de APIS.",
    },
    {
      "name": "React",
      "icon": "assets/icons/react_light.svg",
      "description": "Integracion de interfaces funcionales usando Tailwind CSS o Boostrap, con proteccion de rutas y consumo de APIS.",
    }
  ]

  skillsDevOps = [
    {
      "name": "docker",
      "icon": "assets/icons/docker.svg",
      "description": "Tengo experiencia creando imágenes Docker personalizadas y configurando entornos usando Docker Compose. Puedo construir y gestionar contenedores para aplicaciones, facilitando el despliegue y la escalabilidad en diferentes entornos. He trabajado con contenedores tanto para desarrollo como para producción, asegurando que las aplicaciones sean fáciles de configurar y ejecutar."

    },
    {
      "name": "AWS",
      "icon": "assets/icons/aws_light.svg",
      "description": "He implementado y gestionado servicios de AWS como S3 para almacenamiento, EC2 para servidores, RDS para bases de datos, Lambda para funciones sin servidor, DynamoDB para bases de datos NoSQL, y API Gateway para gestionar las APIs. Además, tengo experiencia configurando permisos y accesos con IAM, y sigo aprendiendo y optimizando el uso de estos servicios para proyectos escalables y eficientes."
    }
  ]

  dataBases = [
    {
      "name": "MySql",
      "icon": "assets/icons/mysql.svg",
      "description": "MySQL es un sistema de gestión de bases de datos relacional de código abierto. Lo he utilizado para almacenar datos estructurados en aplicaciones monolíticas y microservicios, aprovechando su robustez y escalabilidad para manejar grandes volúmenes de información."
    },
    {
      "name": "MongoDB",
      "icon": "assets/icons/mongodb.svg",
      "description": "MongoDB es una base de datos NoSQL orientada a documentos. He trabajado con MongoDB para manejar datos no estructurados y semi-estructurados en aplicaciones que requieren escalabilidad horizontal, flexibilidad y un esquema dinámico."
    },
    {
      "name": "PostgreSQL",
      "icon": "assets/icons/postgresql.svg",
      "description": "PostgreSQL es un sistema de gestión de bases de datos relacional avanzado, conocido por su estabilidad y soporte a consultas complejas. Lo he utilizado en proyectos que requieren integridad de datos y soporte para funciones avanzadas como JSONB y extensiones personalizadas."
    }
  ]

  openIndicesBackend = new Set<number>();
  openIndicesFrontend = new Set<number>();
  openIndicesDevOps = new Set<number>();
  openIndicesDataBases = new Set<number>();

  svgPlus = `
    <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="currentColor" viewBox="0 0 16 16">
      <path d="M8.75 3.75a.75.75 0 0 0-1.5 0v3.5h-3.5a.75.75 0 0 0 0 1.5h3.5v3.5a.75.75 0 0 0 1.5 0v-3.5h3.5a.75.75 0 0 0 0-1.5h-3.5v-3.5Z" />
    </svg>`;
  svgMinus = `
    <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="currentColor" viewBox="0 0 16 16">
      <path d="M3.75 7.25a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5h-8.5Z" />
    </svg>`;

    toggleAccordion(groupIndex: number, skillIndex: number) {
      if (groupIndex === 0) {
        this.toggleGroup(this.openIndicesBackend, skillIndex);
      } else if (groupIndex === 1) {
        this.toggleGroup(this.openIndicesFrontend, skillIndex);
      } else if (groupIndex === 2) {
        this.toggleGroup(this.openIndicesDevOps, skillIndex);
      } else if (groupIndex === 3) {
        this.toggleGroup(this.openIndicesDataBases, skillIndex);
      }
    }
  
    toggleGroup(openIndices: Set<number>, skillIndex: number) {
      openIndices.has(skillIndex) ? openIndices.delete(skillIndex) : openIndices.add(skillIndex);
    }
  
    isOpen(groupIndex: number, skillIndex: number): boolean {
      if (groupIndex === 0) return this.openIndicesBackend.has(skillIndex);
      if (groupIndex === 1) return this.openIndicesFrontend.has(skillIndex);
      if (groupIndex === 2) return this.openIndicesDevOps.has(skillIndex);
      if (groupIndex === 3) return this.openIndicesDataBases.has(skillIndex);
      return false;
    }

}
