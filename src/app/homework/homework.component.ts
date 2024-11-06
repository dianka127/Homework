import { Component, OnInit} from '@angular/core';
import { getActiveConsumer } from '@angular/core/primitives/signals';
import { TestComponent } from "../test/test.component";


@Component({
    selector: 'app-homework',
    standalone: true,
    templateUrl: './homework.component.html',
    styleUrl: './homework.component.scss',
    imports: [TestComponent]
})
export class HomeworkComponent implements OnInit {
greeting: string;

ngOnInit(): void {
  console.log('ngOnInit')
}


messageFromChild(message: string) {
  console.log(message);
}




}


