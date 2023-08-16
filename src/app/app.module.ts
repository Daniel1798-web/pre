import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule} from '@angular/common/http'
import { MessageService } from '../app/service/message.service';


import { AppComponent } from './app.component';
import { Part1Component } from './components/part1/part1.component';
import { HeaderComponent } from './components/header/header.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProyectsComponent } from './components/proyects/proyects.component';
import { FoterComponent } from './components/foter/foter.component';
import { MessageComponent } from './components/message/message.component';
import { OpinionsComponent } from './components/opinions/opinions.component';

@NgModule({
  declarations: [
    AppComponent,
    Part1Component,
    HeaderComponent,
    SkillsComponent,
    ProyectsComponent,
    FoterComponent,
    MessageComponent,
    OpinionsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
