import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileDetailComponent } from './profile-detail/profile-detail.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent, ProfileComponent, ProfileDetailComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
