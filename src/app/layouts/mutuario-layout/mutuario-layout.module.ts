import { ClipboardModule } from 'ngx-clipboard';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MutuarioLayoutRoutes } from './mutuario-layout.routing';
import { MutuarioLayoutComponent } from './mutuario-layout.component';

@NgModule({
    declarations: [
      
  ],
    imports: [
      CommonModule,
      RouterModule.forChild(MutuarioLayoutRoutes),
      FormsModule,
      HttpClientModule,
      NgbModule,
      ClipboardModule
      
    ],
    providers: [],
    bootstrap: [MutuarioLayoutComponent]
  })
  export class MutuarioLayoutModule {}