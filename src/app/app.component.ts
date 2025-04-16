import { Component } from '@angular/core';
import { HeaderComponent } from "./components/header/header.component";
import { ProfileComponent } from "./components/profile/profile.component";
import { SkillsComponent } from './components/skills/skills.component';
import { TimelineComponent } from "./components/timeline/timeline.component";
import { ProjectsComponent } from "./components/projects/projects.component";
import { FooterComponent } from "./components/footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, ProfileComponent, SkillsComponent, TimelineComponent, ProjectsComponent, FooterComponent],
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'portfolioJavaDeveloper';
}

