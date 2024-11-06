import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeworkComponent } from './homework/homework.component';
import {FormsModule} from '@angular/forms'


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, HomeworkComponent, FormsModule]
})
export class AppComponent {
  title = 'project';
  username = 'Diana';
  favoriteFramework = '';

  showFramework() {
    alert(this.favoriteFramework);
  }

}



  let form = document.getElementsByName('my-form')[0];


  let articles = form.getElementsByClassName('article');
  alert(articles.length);









































































































