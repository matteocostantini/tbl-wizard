import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxElectronModule } from 'ngx-electron';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogViewerComponent } from './log-viewer/log-viewer.component';
import { ApplicationComponent } from './application/application.component';
import { HomeComponent } from './home/home.component';
import { SelectWorkspaceComponent } from './select-workspace/select-workspace.component';
import { MessagesComponent } from './messages/messages.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AboutComponent } from './about/about.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LogViewerComponent,
    ApplicationComponent,
    HomeComponent,
    SelectWorkspaceComponent,
    MessagesComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxElectronModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [AboutComponent]
})
export class AppModule { }
