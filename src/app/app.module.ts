import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { SelectComponent } from './components/select/select.component';

import { PositionComponent } from './components/position/position.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PositionCardComponent } from './components/position-card/position-card.component';
import { PositionsPageComponent } from './pages/positions-page/positions-page.component';
import { GroupByPipe } from './pipes/group-by.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SelectComponent,
    PositionComponent,
    NavbarComponent,
    PositionCardComponent,
    PositionsPageComponent,
    GroupByPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
