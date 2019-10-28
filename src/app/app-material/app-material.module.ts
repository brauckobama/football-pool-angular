import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSelectModule, MatSidenavModule, MatListModule, MatCardModule } from '@angular/material/';
import { MatSliderModule, MatButtonModule, MatIconModule, MatToolbarModule, MatExpansionModule } from '@angular/material/';



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
    MatExpansionModule
  ],
  exports: [
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatSliderModule,
    MatSelectModule,
    MatCardModule,
    MatExpansionModule
  ]
})
export class AppMaterialModule { }
