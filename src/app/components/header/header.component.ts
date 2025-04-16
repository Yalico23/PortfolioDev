import { CodeComponent } from '../../icons/code/code.component';
import { Component } from '@angular/core';
import { MessageComponent } from '../../icons/message/message.component';
import { EducationComponent } from '../../icons/education/education.component';
import { ComputerComponent } from '../../icons/computer/computer.component';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MessageComponent, CodeComponent, EducationComponent, ComputerComponent],
  templateUrl: './header.component.html',
})
export class HeaderComponent {

  correo : string = "jeanpiero_23_01@hotmail.com";

  isContactModalOpen  = false;

  openContactModel() {
    this.isContactModalOpen = true;
  }

  closeContactModal() {
    this.isContactModalOpen = false;
  }
}
