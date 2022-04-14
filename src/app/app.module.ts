import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UserAuthModule } from './user-auth/user-auth.module';
import { FormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { StudentsListComponent } from './students-list/students-list.component';
import { CountryComponent } from './country/country.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { ChildComponent } from './child/child.component';
import { UserDeatailComponent } from './user-deatail/user-deatail.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    HeaderComponent,
    FooterComponent,
    StudentsListComponent,
    CountryComponent,
    ChildComponent,
    UserDeatailComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserAuthModule,
    FormsModule,
    NgbModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
