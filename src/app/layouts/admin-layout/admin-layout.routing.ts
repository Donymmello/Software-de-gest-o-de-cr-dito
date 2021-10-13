import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/Dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { UpdateMutuarioComponent } from '../../pages/update-mutuario/update-mutuario.component';
import { CreateMutuarioComponent } from '../../pages/create-mutuario/create-mutuario.component';
import { MutuarioDetailsComponent } from '../../pages/mutuario-details/mutuario-details.component';
import { MutuarioListComponent } from '../../pages/mutuario-list/mutuario-list.component';
import { UtilizadorDetailsComponent } from '../../pages/utilizador-details/utilizador-details.component';
import { CreateUtilizadorComponent } from '../../pages/create-utilizador/create-utilizador.component';
import { UtilizadorListComponent } from './../../pages/utilizador-list/utilizador-list.component';
import { UpdateUtilizadorComponent } from 'src/app/pages/update-utilizador/update-utilizador.component';


export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
   // { path: 'tables',         component: TablesComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },

    { path: 'mutuario-list',  component: MutuarioListComponent},
    { path: 'create-mutuario', component: CreateMutuarioComponent},
    { path: '', redirectTo: 'mutuarios', pathMatch: 'full'},
    { path: 'update-mutuario/:id', component: UpdateMutuarioComponent},
    { path: 'mutuario-details/:id', component: MutuarioDetailsComponent},
    
    { path: 'utilizador-list',  component: UtilizadorListComponent},
    { path: 'create-utilizador', component: CreateUtilizadorComponent},
    { path: '', redirectTo: 'utilizadores', pathMatch: 'full'},
    { path: 'update-utilizador/:id', component: UpdateUtilizadorComponent},
    { path: 'utilizador-details/:id', component: UtilizadorDetailsComponent},   
];
