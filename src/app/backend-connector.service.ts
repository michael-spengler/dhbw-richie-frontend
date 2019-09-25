import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BackendConnectorService {

  // private backendURL = 'http://95.217.10.3';
  private backendURL = 'https://spengler.biz';
  // private backendURL = 'http://localhost:3000';
  public constructor(private http: HttpClient) {

  }

  private get(url: string) {
    console.log(`calling to get ${url}`);
    return this.http.get(url);
  }

  getTrainingData(): any {
    return this.get(`${this.backendURL}/getTrainingData`);
  }



  addTrainingData(entry): any {
    const url = `${this.backendURL}/addTrainingData`;
    return this.post(url, entry);
  }


  private post(url: string, body: any) {
    console.log(`calling to post to ${url}`);

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    console.log(JSON.stringify(body));
    return this.http.post<any>(url, JSON.stringify(body), httpOptions);
  }


}
