import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  public title = 'DHBW Richie';
  public learningmode = false;
  public newInput = '';
  public newOutput = '';
  public trainingData = [
    {
      input: 'Wie bestehe ich immer die Klausur?',
      output: 'Fleißig Lernen und üben'
    },
    {
      input: 'Was sind die Schwerpunkte in der Datenbanken Klausur?',
      output: 'Alles ist wichtig'
    },
    {
      input: 'Was ist TSLint?',
      output: 'TSLint ist ein Werkzeug für statische Code Checks.'
    }
  ];

  public clickLernWasNeues() {
    this.learningmode = true;
  }

  public clickSave() {
    alert('Danke ...');
  }

}
