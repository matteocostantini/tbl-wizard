import { GeneratorService } from './../service/generator.service';
import { LogService } from './../service/log.service';
import { WorkspaceService } from './../service/workspace.service';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { RunArguments } from 'src/models/run-arguments';

@Component({
  selector: 'tblw-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.scss']
})
export class ApplicationComponent implements OnInit {

  constructor(
    private workspace: WorkspaceService,
    private logger: LogService,
    private generator: GeneratorService,
    private chd: ChangeDetectorRef
  ) { }

  ngOnInit() {
  }

  onRun() {
    this.logger.info("Creating new app ...");
    this.generator.run(new RunArguments( 
      this.workspace.path(),
      {
        appName: "myNewApp",
        defaultLibrary: "firstLibrary"
      }))
    .subscribe( entry => {
      this.logger.add(entry);
      this.chd.detectChanges();
    });
  } 

}
