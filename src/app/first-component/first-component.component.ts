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


    //Exercise 1.Sum of array elements

    let i = 0;
    let numbers = [1,2,3,4,5];
    numbers.forEach(number => i += number);
    console.log(i);


    //Exercise 2. filtering positive numbers

    let numbs = [-2,3,-5,7,-11,10];
    const filter = numbs.filter(number => number > 0)
    console.log(filter);


    //Exercise 3. union of two arrays

    let array1 = [1,2];
    let array2 = [3,4];
    console.log([...array1,...array2]);

    //Exercise 4. finding the maximum element

    let num = [10,20,5,8,15];
    let a = 0;
    num.forEach(number => {
      if(number>a) {
        a = number;
      }
      return number;
    })
    console.log(a);



    //Exercise 5. counting the number of elements in an array

    let array3 = [1,2,3,4,5];
    const length = array3.length;
    console.log(length);


    //Exercise 6. search for unique elements

    let array4 = [1,2,3,2,4,3,5];
    const uniqueElem = array4.filter((number,index) => array4.indexOf(number)===index);
    console.log(uniqueElem);


    //Exercise 7.search for frequently occurring element

    let map: any = {};
    const array5 = [1,2,3,2,4,3,2,5,2];
    let result = "0";

    array5.forEach(element => {
      if(Object.keys(map).includes(String(element))) {
        map[element] += 1;
      } else {
        map[element] = 1;
      }
    });
      for(let key of Object.keys(map)) {
        if (map[key] > result) {
          result = key;
        }
      }

      console.log(result);


    //Exercise 8.array expansion

    let array6 = [1,2,3,4,5];
    const reverse = array6.reverse();
    console.log(reverse);



    // objects

      const products = [
        {
          id: 'p1',
          name: 'Product 1',
          price: 10,
          category: 'Category A'
        },
        {
          id: 'p2',
          name: 'Product 2',
          price: 20,
          category: 'Category B'
        },
        {
          id: 'p3',
          name: 'Product 3',
          price: 30,
          category: 'Category A'
        }
      ]
      const productsObj = products.reduce(function (result, user) {
        return {
          ...result,
          [user.id]: {name: user.name, price: user.price, category: user.category}
        };
      }, {})
      console.log(productsObj);


  //1

const fruits = ['kiwi', 'apple', 'kiwi', 'orange', 'kiwi','apple'];
const count: any = {};
fruits.forEach(f => {
  if(!count[f]) {
    count[f] = 1;
  } else {
    count[f] ++;
  }
})

//2

const students = [
  {name: 'alex', age: 20},
  {name: 'mike', age: 24},
  {name: 'masha', age: 20},
  {name: 'stas', age: 18},
];

const grouped: any = {};

students.forEach(number => {
  if(!grouped[number.age]) {
    grouped[number.age] = [number]
  } else {
    grouped[number.age].push(number);
  }
});

//3

const friends = [
  {name: 'alex', pizzas: ['cheese', 'pepperoni']},
  {name: 'mike', pizzas: ['salami', 'margarita']},
  {name: 'stas', pizzas: ['meat']},
  {name: 'anna', pizzas: ['fish']}
];

const pizzas = friends.reduce(function (accum: any, current) {
  return [...accum, ...current.pizzas];
}, []);
console.log(pizzas);




//function
//№ 1
    const task1 = this.letters(['a','b','c','d'], '; ' );
    console.log(task1);

//№ 2
    const task2 = this.chooseStudents([{name: 'Diana', age: 23, point: 8 }, {name: 'Oleg', age: 23, point: 5}, {name: 'Daria', age: 23, point: 6}, {name: 'Olga', age: 23, point: 9} ]);
    console.log(task2);

//№3
    const task3 = this.chooseNumbers(15);
    console.log(task3);

//№4
    const task4 = this.noRepeat([1,2,2,3,4,4],[5,5,3,3,2,2]);
    console.log(task4);

  }

//№1
  letters(a: any = [], b: any = '') {
    return a.join(b);
  }

//№2
chooseStudents(students: any = []) {
  const result = {bestStudents: [], worstStudents: []};
  students.forEach ((student) => {
    if(student.point > 6) {
      result.bestStudents.push(student.name);
    } else if (student.point < 6) {
      result.worstStudents.push(student.name);
    }
  })

  return result;
}

//№3
  chooseNumbers(number: number) {
    const evenNumbers = [];
    for(let i=0; i<number; i++) {
      if(i % 2 === 0) {
        evenNumbers.push(i);
      }
    }
    return evenNumbers;
  }

//#4
  noRepeat(array1:any = [], array2: any = []) {
    const combinedArray = [...array1, ...array2];
    return combinedArray.filter((num,ind) => combinedArray.indexOf(num)===ind);
  }


}




