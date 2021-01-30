import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NewsComponent } from './news/news.component';
import { EventsComponent } from './events/events.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { EventnotfoundComponent } from './eventnotfound/eventnotfound.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { DetailComponent } from './detail/detail.component';

const routes: Routes = [
  {
    path:"news",
    component:NewsComponent,
  },
    {
    path:"events",
    component:EventsComponent,
    children:[
     
      {
        path:"**",
        component:EventnotfoundComponent,
      },
    ]
  },
  {
    path:"detail/:id",
    component:DetailComponent,
  },
  {
    path:"about",
    component:AboutComponent,
  },
  {
    path:"header",
    component:HeaderComponent,
  },
  {
    path:"footer",
    component:FooterComponent,
  },
  {
    path:"",
    redirectTo:"news",
    pathMatch:"full",
  },
  {
    path:"**",
    component:PagenotfoundComponent,
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
