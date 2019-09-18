import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BackendConnectorService {

  public constructor(private http: HttpClient) {

  }

  private get(url: string) {
    console.log(`calling to get ${url}`);
    return this.http.get(url);
  }

  getTrainingData(): any {
    return this.get('http://95.217.10.3/getTrainingData');
  }


}
