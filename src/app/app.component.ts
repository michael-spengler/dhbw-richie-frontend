import { Component, OnInit } from '@angular/core';
import { BackendConnectorService } from './backend-connector.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {
  public title = 'DHBW Richie';
  public learningmode = false;
  public newInput = '';
  public newOutput = '';
  public trainingData = [];

  public constructor(private backendConnectorService: BackendConnectorService) {}
  public ngOnInit() {
    this.backendConnectorService.getTrainingData()
      .subscribe((result) => this.trainingData = result );
  }
  public clickLernWasNeues() {
    this.learningmode = true;
  }

  public clickSave() {
    alert('Danke ...');
  }

}
