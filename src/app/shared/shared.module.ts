import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedRoutingModule,
    
  ],
  // exports:[HeaderComponent,FooterComponent,BodyComponent]
})
export class SharedModule { }
