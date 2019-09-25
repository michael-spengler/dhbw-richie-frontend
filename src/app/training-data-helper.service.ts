import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TrainingDataHelperService {

  constructor() { }

  public checkForDuplicates(input: string, trainingData: any[]): boolean {

    for (const trainingDataEntry of trainingData) {
      if (trainingDataEntry.input === input) {
        return true;
      }
    }
    return false;
  }
}
