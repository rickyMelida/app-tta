import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MainPageRoutingModule } from './main-routing.module';

import { MainPage } from './main.page';

import { DisplayComponent } from "../components/display/display.component";
import { ButtonComponent } from "../components/button/button.component";
import { HttpClientModule } from '@angular/common/http';
import { DataArduService } from '../services/data-ardu.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MainPageRoutingModule,
    HttpClientModule
  ],
  providers: [
    DataArduService

  ],
  declarations: [
    MainPage,
    DisplayComponent,
    ButtonComponent
  ]
})
export class MainPageModule {}
