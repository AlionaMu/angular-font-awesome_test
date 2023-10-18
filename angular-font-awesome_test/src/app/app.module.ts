import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ButtonComponent } from './components/button/button.component';
import { IconComponent } from './components/icon/icon.component';
import { GetRandomService } from './shared/services/getRandom.service';


@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    IconComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [GetRandomService],
  bootstrap: [AppComponent]
})
export class AppModule { }
