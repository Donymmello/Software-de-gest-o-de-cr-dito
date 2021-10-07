import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { CreateMutuarioComponent } from './pages/create-mutuario/create-mutuario.component';
import { UpdateMutuarioComponent } from './pages/update-mutuario/update-mutuario.component';
import { MutuarioDetailsComponent } from './pages/mutuario-details/mutuario-details.component';
import { MutuarioListComponent } from './pages/mutuario-list/mutuario-list.component';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthLayoutComponent

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
