import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SelectComponent } from './components/select/select.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PositionCardComponent } from './components/position-card/position-card.component';
import { PositionsPageComponent } from './pages/positions-page/positions-page.component';
import { ModalComponent } from './components/modal/modal.component';


@NgModule({
  declarations: [
    AppComponent,
    SelectComponent,
    NavbarComponent,
    PositionCardComponent,
    PositionsPageComponent,
    ModalComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FontAwesomeModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
