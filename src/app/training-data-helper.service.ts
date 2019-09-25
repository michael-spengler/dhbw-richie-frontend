import { Injectable } from '@angular/core';
import { ITrainingData } from './app.component';

@Injectable({
  providedIn: 'root'
})
export class TrainingDataHelperService {

  constructor() { }

  public checkForDuplicates(input: string, trainingData: ITrainingData[]): boolean {

    for (const trainingDataEntry of trainingData) {
      if (trainingDataEntry.input === input) {
        return true;
      }
    }
    return false;
  }

  public removeDuplicates(trainingData: any[]) {

    const uniqueEntries = [];

    /// uniqueEntries.some((entry: ITrainingData) => entry.input === );

    // for (const entry of trainingData) {
    //   if (uniqueEntries.indexOf(entry)) {
    //     uniqueEntries.push(entry);
    //   }
    // }

    return uniqueEntries;
  }
}
