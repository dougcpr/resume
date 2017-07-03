import { Injectable } from '@angular/core';

@Injectable()
export class ProjectDataService {
  public data : any = [
    {
      title: "First Card",
      frontContent: "",
      backContent: "This is the first card sample back content.",
      projectName: "Project Name",
      dateCompleted: "yyyy.mm.dd",
      technologies: "android public watch tv",
    }, {
      title: "Second Card",
      frontContent: "",
      backContent: "This is the second card sample back content.",
      projectName: "Project Name",
      dateCompleted: "yyyy.mm.dd",
      technologies: "android public watch tv",
    }, {
      title: "Third Card",
      frontContent: "",
      backContent: "This is the third card sample back content.",
      projectName: "Project Name",
      dateCompleted: "yyyy.mm.dd",
      technologies: "android public watch tv",
    }, {
      title: "Fourth Card",
      frontContent: "",
      backContent: "This is the fourth card sample back content.",
      projectName: "Project Name",
      dateCompleted: "yyyy.mm.dd",
      technologies: "android public watch tv",
    }
  ]

  public aboutMe : any = [
    {
      title: "First Card",
      backContent: "This is the first description about me.",
    }, {
      title: "Second Card",
      backContent: "This is the second description about me",
    }, {
      title: "Third Card",
      backContent: "This is the third description about me",
    }
  ]
}
