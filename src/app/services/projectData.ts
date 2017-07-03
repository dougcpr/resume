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
  ];

  public aboutMe : any = [
    {
      title: "First Card",
      backContent: "I take initiative and lead by example. If I am asking something of you, I will demonstrate that I can first do it. I have learned to delegate tasks while filing a patent and being a scrum master and dev at the same time.",
    }, {
      title: "Second Card",
      backContent: "I strive to learn. Everything here, while simple is written by me. Anything I can do to make my app look better and preform faster, I will look for so I don't have to rely on bulky css frameworks.",
    }, {
      title: "Third Card",
      backContent: "I started learning piano in January 2016 and love it so far. Here is a clip at my teacher's reception after 3 months.",
    }
  ]
}
