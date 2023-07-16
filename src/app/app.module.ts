import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlaylistComponent } from './playlist/playlist.component';
import { PlaylistHeaderComponent } from './playlist-header/playlist-header.component';
import { HeaderPlaylistDivisionComponent } from './header-playlist-division/header-playlist-division.component';
import { UserSectionComponent } from './user-section/user-section.component';
import { LibraryComponent } from './library/library.component';

@NgModule({
  declarations: [
    AppComponent,
    PlaylistComponent,
    PlaylistHeaderComponent,
    HeaderPlaylistDivisionComponent,
    UserSectionComponent,
    LibraryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
