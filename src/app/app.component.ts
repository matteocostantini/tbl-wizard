import { Component, ChangeDetectorRef, OnInit } from '@angular/core';
import { ElectronService } from 'ngx-electron';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ng-tbl-wizard';
  result: string ='';
  version: string;
  
  constructor(
    private electron: ElectronService,
    private chd: ChangeDetectorRef
  ) {
    if (this.electron.isElectronApp) {
      this.electron.ipcRenderer
      .on('main-version', (event, arg) => {
        this.version = "electron: " + arg.electron + " node: " + arg.node;
        this.chd.detectChanges();
      })
    }
  }

  ngOnInit() {
    if (this.electron.isElectronApp) {
      this.electron.ipcRenderer.send('version', true);
    }
  }

  onRun() {
    if (this.electron.isElectronApp) {
      this.electron.ipcRenderer.send('run', { 
        workingDir: "C:\\Users\\rinaldi\\Documents\\working\\standard\\applications",
        answers:  {
          appName: "myNewApp",
          defaultLibrary: "firstLibrary"
        }
      });
    }
  } 
}
