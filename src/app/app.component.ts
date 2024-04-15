import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeworkComponent } from './homework/homework.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, HomeworkComponent]
})
export class AppComponent {
  title = 'project';
}
