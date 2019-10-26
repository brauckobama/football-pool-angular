import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GamesComponent } from './games/games.component';
import { PathNotFoundComponent } from './path-not-found/path-not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule, MatButtonModule, MatIconModule, MatToolbarModule, MatSelectModule, MatSidenavModule, MatListModule } from '@angular/material/';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { GamesDetailComponent } from './games-detail/games-detail.component';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    AppComponent,
    GamesComponent,
    PathNotFoundComponent,
    GamesDetailComponent,
    HeaderComponent,
    SidenavListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatSelectModule,
    HttpClientModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
