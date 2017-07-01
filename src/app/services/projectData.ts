import { Injectable } from '@angular/core';

@Injectable()
export class ProjectDataService {
  public data : any = [
    {
      title: "First Card",
      frontContent: "This is the first Card sample front content.",
      backContent: "This is the first Card sample back content.",
      clientName: "CLIENT NAME",
      dateCompleted: "yyyy.mm.dd",
      technologies: "android public watch tv",
    }, {
      title: "Second Card",
      frontContent: "This is the second Card sample front content.",
      backContent: "This is the second Card sample back content.",
      clientName: "CLIENT NAME",
      dateCompleted: "yyyy.mm.dd",
      technologies: "android public watch tv",
    }, {
      title: "Third Card",
      frontContent: "This is the third Card sample front content.",
      backContent: "This is the third Card sample back content.",
      clientName: "CLIENT NAME",
      dateCompleted: "yyyy.mm.dd",
      technologies: "android public watch tv",
    }
  ]
}
