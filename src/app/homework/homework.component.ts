import { Component } from '@angular/core';
import { getActiveConsumer } from '@angular/core/primitives/signals';

@Component({
  selector: 'app-homework',
  standalone: true,
  imports: [],
  templateUrl: './homework.component.html',
  styleUrl: './homework.component.scss'
})
export class HomeworkComponent {
  constructor() {
    //2
    const task = this.chooseStudents([{name: 'Diana', age: 23, point: 8 }, {name: 'Oleg', age: 23, point: 5}, {name: 'Daria', age: 23, point: 4}, {name: 'Olga', age: 23, point: 9} ]);
    console.log(task);

  }

  chooseStudents(students: any = []) {
    const result: any = {};
    students.forEach ((student: any) => {
      if(student.point > 6) {
        result.bestStudents = [student.name];
      } else if (student.point < 6) {
        result.worstStudents = [student.name];
      }
    })

    return result;
  }


}

