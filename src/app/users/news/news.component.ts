import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  data:any;
  constructor(private Obj:DataService) { }

  ngOnInit(): void {
    this.data = this.Obj.GetAll()
  }

}
