import { Injectable } from '@angular/core';

@Injectable()
export class ProjectDataService {
  public data : any = [
    {
      title: "Front End Developer",
      frontContent: "Front End Developer for Concierge Bot",
      backContent: "This is the first card sample back content.",
      projectName: "Concierge Bot",
      dateCompleted: "2017.05.15",
      technologies: "android public watch tv",
    }, {
      title: "POD/SM",
      frontContent: "POD/SM for Common Online Session Cache Projecr",
      backContent: "This is the second card sample back content.",
      projectName: "COSC",
      dateCompleted: "2016.02.05",
      technologies: "android public watch tv",
    }, {
      title: "Full Stack Developer/SM",
      frontContent: "Full Stack Developer/SM for Welcome Buddy App",
      backContent: "This is the third card sample back content.",
      projectName: "Welcome Buddy App",
      dateCompleted: "2016.09.05",
      technologies: "android public watch tv",
    }, {
      title: "iOS Developer",
      frontContent: "Front End iOS Developer for Movie Database",
      backContent: "This is the fourth card sample back content.",
      projectName: "Movie Database",
      dateCompleted: "2017.12.10",
      technologies: "android public watch tv",
    }
  ];

  public aboutMe : any = [
    {
      title: "First Card",
      backContent: "I take initiative and lead by example. If I am asking something of you, I will demonstrate that I can first do it. I have learned to delegate tasks while filing a patent and fulfilling a scrum master and dev role in tandem.",
    }, {
      title: "Second Card",
      backContent: "I strive to learn. Everything here, while simple is written by me. Anything I can do to make my app look better and preform faster, I will look for so I don't have to rely on bulky css frameworks.",
    }, {
      title: "Third Card",
      backContent: "I started learning piano in January 2016 and love it! Here is a clip at my teacher's reception after 3 months.",
    }
  ]

  public proficiencyData: any = [
    {
      name: "Skill 1",
      proficiency: "beginner"
    },
    {
      name: "Skill 2",
      proficiency: "intermediate"
    },
    {
      name: "Skill 3",
      proficiency: "expert"
    },
    {
      name: "Skill 4",
      proficiency: "master"
    },
  ]
}
