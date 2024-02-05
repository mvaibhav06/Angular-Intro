import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { successAlertComponent } from './success-alert/success-alert.component';
import { FormsModule } from '@angular/forms';
import { Assignment2Component } from './assignment-2/assignment-2.component';
import { Assignment3Component } from './assignment-3/assignment-3.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    WarningAlertComponent,
    successAlertComponent,
    Assignment2Component,
    Assignment3Component,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
