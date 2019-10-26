import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSelectModule, MatSidenavModule, MatListModule, MatCardModule } from '@angular/material/';
import { MatSliderModule, MatButtonModule, MatIconModule, MatToolbarModule } from '@angular/material/';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatSliderModule,
    MatSelectModule,
  ],
  exports: [
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatSliderModule,
    MatSelectModule,
    MatCardModule
  ]
})
export class AppMaterialModule { }
