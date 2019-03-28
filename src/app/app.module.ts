import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HeroareaComponent } from './heroarea/heroarea.component';
import { LeftOptionAreaComponent } from './left-option-area/left-option-area.component';
import { RightContentAreaComponent } from './right-content-area/right-content-area.component';
import { CheckOutAreaComponent } from './check-out-area/check-out-area.component';
import { BodycomponentComponent } from './bodycomponent/bodycomponent.component';
import { Routes, RouterModule } from '@angular/router';
import { areIterablesEqual } from '@angular/core/src/change_detection/change_detection_util';

const appRoutes: Routes = [
  { path: '', component: BodycomponentComponent },
  { path: 'check-out-area', component: CheckOutAreaComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HeroareaComponent,
    LeftOptionAreaComponent,
    RightContentAreaComponent,
    CheckOutAreaComponent,
    BodycomponentComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
