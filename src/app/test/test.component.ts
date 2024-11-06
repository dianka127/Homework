import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [],
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss'
})
export class TestComponent implements OnInit {
@Input() footer: any;
@Output() onClickEvent = new EventEmitter<string>();

ngOnInit(): void {

}

handleButtonClick() {
  this.onClickEvent.emit('Hello from child component');
}
}
