import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task3',
  templateUrl: './task3.component.html',
  styleUrls: ['./task3.component.css']
})
export class Task3Component implements OnInit {
  showText: false;
  log = [];

  onToggleDetails() {
    this.showText = this.showText;
    this.log.push(this.log.length + 1);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
