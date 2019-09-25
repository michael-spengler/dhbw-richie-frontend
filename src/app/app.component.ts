import { Component, OnInit } from '@angular/core';
import { BackendConnectorService } from './backend-connector.service';
import { TrainingDataHelperService } from './training-data-helper.service';


export interface ITrainingData {
  input: string;
  output: string;
}

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

  public constructor(private backendConnectorService: BackendConnectorService, private trainingDataHelper: TrainingDataHelperService) {}


  public ngOnInit() {
    this.backendConnectorService.getTrainingData()
      .subscribe((result) => {
        this.trainingData = result;
        alert(this.trainingData.length);
        this.trainingData = this.trainingDataHelper.removeDuplicates(this.trainingData);
        alert(this.trainingData.length);

      } );


  }
  public clickLernWasNeues() {
    this.learningmode = true;
  }


  public clickSave() {

    const isDuplicate = this.trainingDataHelper.checkForDuplicates(this.newInput, this.trainingData);

    if (isDuplicate === false) {

      this.backendConnectorService.addTrainingData({input: this.newInput, output: this.newOutput })
      .subscribe(() => {
        this.backendConnectorService.getTrainingData()
        .subscribe((result) => this.trainingData = result );
      });
    } else {
      alert('Hey. Den Input kenne ich doch schon');
    }

    this.newInput = '';
    this.newOutput = '';


  }

}
