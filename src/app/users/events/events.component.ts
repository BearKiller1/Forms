import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  subjectOn = false;
  data:any;
  constructor(private Obj:DataService) { }

  ngOnInit(): void {
    this.data = this.Obj.GetAll();
  }

}
