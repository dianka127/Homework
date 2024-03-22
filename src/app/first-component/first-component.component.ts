import { Component } from '@angular/core';

@Component({
  selector: 'app-first-component',
  standalone: true,
  imports: [],
  templateUrl: './first-component.component.html',
  styleUrl: './first-component.component.scss'
})
export class FirstComponentComponent {
  constructor() {

    //Variables, working with strings:

   /*  let namePlanet;
    namePlanet = 'Venus';
    console.log(namePlanet);

    let agePlanet;
    agePlanet = 100;

    console.log(namePlanet, agePlanet);
    console.log(`${namePlanet} is ${agePlanet} years old`);

    //basic mathematics:

    let age: number;
    age = 20;

    let height: number;
    height = 160;

    let sum: number;
    sum = age + height;
    console.log(sum);

    let sub: number;
    sub = height - age;
    console.log(sub);

    let mult: number;
    mult = age*height;
    console.log(mult);

    let div: number;
    div = height/age;
    console.log(div);

    console.log(div++);
    console.log(div);

    console.log(++div);
    console.log(age++);
    console.log(height++);
    console.log(age + height);

    //comparison, boolean

    let one: number;
    one = 3;
    let two: string;
    two = '3';

    console.log(one === Number(two));

    let herAge: number;
    herAge = 5;

    let hisAge: boolean;
    hisAge = true;

    console.log(!!herAge===hisAge);
    console.log(!herAge===hisAge);
    console.log(!herAge>hisAge);
    console.log(!!herAge>=hisAge);

    let hisHeight: boolean;
    hisHeight = false;
    console.log(hisAge > hisHeight);
    console.log(!hisAge > hisHeight);

    let name: string;
    name = '';
    console.log(!hisHeight<!!name);
    console.log(!hisHeight<=!name);

    let secondName: string;
    secondName = '';
    console.log(name==secondName);
    console.log(name===secondName);
    secondName = 'sun';
    console.log(name==secondName);
    name = 'sun'
    console.log(name==secondName);
    //typeof

    let answer = false;
    console.log(typeof(answer));
    let sun;
    console.log(typeof(sun));
    let word = '3';
    console.log(Number(word));
    console.log(typeof(!word)); */


    //operators if, if else:

    let age = 17;
    if(age>=18) {
      console.log('You are of age');
    } else {
      console.log('You are underage');
    }




    let name = 'John';
    let yourName = 'Diana';
    if(name===yourName) {
      console.log('Hello,John!');
    } else {
      console.log('Hello,stranger');
    }

    //operator switch case:

    let month = 3;
    switch(month) {
      case 1:
        console.log('January');
        break;
      case 2:
        console.log('February');
        break;
      case 3:
        console.log('March');
        break;
      case 4:
        console.log('April');
      break;
      case 5:
        console.log('May');
      break;
      case 6:
        console.log('June');
      break;
      case 7:
        console.log('July');
      break;
      case 8:
        console.log('August');
      break;
      case 9:
        console.log('September');
      break;
      case 10:
        console.log('October');
      break;
      case 11:
        console.log('November');
      break;
      case 12:
        console.log('December');
      break;
      default:
        console.log('wrong number');
    }

    // cycle while

    let number = 1;
    while(number<11) {
      console.log(number++);
    }

    //cycle for

    for(let i=1; i<11; i++) {
      console.log(i*i);
    }




    let firstNumber: number = 1;
    let secondNumber: number = 2;
    let operator: string = '/';

    switch(operator) {
      case '+':
        console.log(`${firstNumber} ${operator} ${secondNumber} = ${firstNumber + secondNumber} `);
        break;
      case '-':
        console.log(`${firstNumber} ${operator} ${secondNumber} = ${firstNumber - secondNumber}`);
        break;
      case '*':
        console.log(`${firstNumber} ${operator} ${secondNumber} = ${firstNumber * secondNumber}`);
        break;
      case '/':
        console.log(`${firstNumber} ${operator} ${secondNumber} = ${firstNumber / secondNumber}`);
        break;
        default:
          console.log('Invalid operator!');
    }


















  }
}
