import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  data = [
    {id:1,title:'Music Event',subject:"Music", date:"2021/1/30", when:"today", image:"https://www.therounduptx.com/wp-content/uploads/2014/09/Live-Music3-1024x512.jpg"},
    {id:2,title:'Live DJ',subject:"Music", date:"2021/1/30", when:"today", image:"https://tse4.mm.bing.net/th?id=OIP.hbRiZ6Qvnqx0EUBlqGUb_wHaD8&pid=Api&P=0&w=334&h=179"},
    {id:3,title:'League Of Legends',subject:"Game", date:"2021/1/30", when:"past", image:"https://www.blog.ministrygroup.de/wp-content/uploads/2017/03/LoL_Event.jpg"},
    {id:4,title:'C++ Consultations',subject:"Develope", date:"2021/1/30", when:"next", image:"https://cdn.earlygame.com/uploads/images/_1200x630_crop_center-center_none/dreamhack_cancel_live_events.jpg"},
    {id:5,title:'Mamkoda Event',subject:"Music", date:"2021/1/30", when:"past", image:"https://i0.wp.com/www.thecinemaholic.com/wp-content/uploads/2018/02/project-x.jpg?resize=1024%2C500&ssl=1"}
  ];
  constructor() { }
  GetAll(){
    return this.data;
  };
  
  GetById(id:any): any{
    for(var i = 0; i!=this.data.length;i++){
      if(id == this.data[i]['id']){
        return this.data[i];
      }
    }
  }
}
