import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ClipboardModule } from 'ngx-clipboard';

import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../pages/Dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MutuarioDetailsComponent } from '../../pages/mutuario-details/mutuario-details.component';
import { CreateMutuarioComponent } from '../../pages/create-mutuario/create-mutuario.component';
import { MutuarioListComponent } from '../../pages/mutuario-list/mutuario-list.component';
import { UpdateMutuarioComponent } from '../../pages/update-mutuario/update-mutuario.component';
// import { ToastrModule } from 'ngx-toastr';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
    ClipboardModule, 
    
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    TablesComponent,
    IconsComponent,
    MapsComponent,
    MutuarioListComponent,
    CreateMutuarioComponent,
    UpdateMutuarioComponent,
    MutuarioDetailsComponent
  ]
})

export class AdminLayoutModule {}
