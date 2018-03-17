import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  courseGoals = [
    {title: 'Master angular Styling', isActiveGoal: true },
    {title: 'Understand Angular Animation', isActiveGoal: false },
    {title: 'Master angular Animation', isActiveGoal: false },
  ];
}
