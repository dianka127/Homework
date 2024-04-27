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
@Output() initializationEvent = new EventEmitter<string>();
@Output() initEvent = new EventEmitter<string>();
ngOnInit(): void {
  this.initializationEvent.emit('hello');
}

handleButtonClick() {
  this.initEvent.emit();
}
}
