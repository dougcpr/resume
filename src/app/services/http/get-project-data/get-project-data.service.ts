import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { Http } from "@angular/http";

@Injectable()
export class GetProjectDataService {

  url = "http://localhost:3000/getProjectData/";

  constructor(private http: Http){}

  getData(param): Observable<any>{
    let self = this;
    return this.http.get(this.url + param)
      .map(this.extractData)
      .timeout(5000)
      .catch(this.handleError.bind(self));
  }

  private extractData(res: any) {
    return JSON.parse(res._body).data;
  }
  private handleError(error: any){
    return Observable.throw(error);
  }
}
