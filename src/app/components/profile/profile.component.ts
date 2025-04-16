import { Component } from '@angular/core';
import { GithubComponent } from '../../icons/github/Github.component';
import { CvComponent } from '../../icons/cv/cv.component';
import { LinkedInComponent } from '../../icons/linked-in/linked-in.component';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [GithubComponent, CvComponent, LinkedInComponent],
  templateUrl: './profile.component.html'
})
export class ProfileComponent {

}
