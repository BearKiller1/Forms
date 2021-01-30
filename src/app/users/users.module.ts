import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';

import { RouterModule } from '@angular/router';

import { NewsComponent } from './news/news.component';
import { EventsComponent } from './events/events.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { EventnotfoundComponent } from './eventnotfound/eventnotfound.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { DetailComponent } from './detail/detail.component';


@NgModule({
  declarations: [NewsComponent, EventsComponent, AboutComponent, FooterComponent, HeaderComponent, EventnotfoundComponent, PagenotfoundComponent, DetailComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    RouterModule
  ],
  exports:[HeaderComponent,FooterComponent]
})
export class UsersModule { }
