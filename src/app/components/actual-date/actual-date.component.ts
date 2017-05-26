import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-actual-date',
  templateUrl: './actual-date.component.html',
  styleUrls: ['./actual-date.component.css']
})
export class ActualDateComponent implements OnInit {
  @Input()
  public dateTime: Date;
  constructor() { }

  ngOnInit() {
  }

}
