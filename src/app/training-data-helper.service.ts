import { Injectable } from "@angular/core";
import { ITrainingData } from "./app.component";

@Injectable({
  providedIn: "root"
})
export class TrainingDataHelperService {
  constructor() {}

  public checkForDuplicates(
    input: string,
    trainingData: ITrainingData[]
  ): boolean {
    return trainingData.some(s => s.input === input);
  }

  public removeDuplicates(trainingData: any[]) {
    const uniqueEntries = [];

    trainingData.forEach(t => {
      if (
        !uniqueEntries.some(u => u.input === t.input && u.output === t.output)
      ) {
        uniqueEntries.push(t);
      }
    });

    return uniqueEntries;
  }
}
