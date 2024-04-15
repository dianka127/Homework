import { Component } from '@angular/core';

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
    const task2 = this.chooseStudents([{name: 'Diana', age: 23, point: 8 }, {name: 'Oleg', age: 23, point: 5}, {name: 'Daria', age: 23, point: 6}, {name: 'Olga', age: 23, point: 9} ]);
    console.log(task2);

    //3
    const task3 = this.chooseNumbers(15);
    console.log(task3);
  }


  //2
  chooseStudents(students: any = []) {
    /* const bestStudents = [];
    if (students.point > 7) {
      bestStudents.push(students.name);
    } */
    students.reduce(function(acum:any ,current: any) {
      if(current.point > 7) {
        return current.name;
      }
    }, [])
  }



  //3
  chooseNumbers(number: number) {
    const evenNumbers = [];
    for(let i=0; i<number; i++) {
      if(i % 2 === 0) {
        evenNumbers.push(i);
      }
    }
  }

}
