import { Injectable } from '@angular/core';

@Injectable()
export class PortfolioService {

  constructor() { }

  public portfolioData = [
    {
      "title" : "Front End Developer",
      "frontContent" : "Concierge Bot",
      "backContent" : [
        "I collaborated on a project to build a concierge bot which uses the responsive voice library and a supervised learning model in API.ai. The bot serves visitors, and allows them to schedule demos, to visit the lab, or learn more about CDI."
        ],
      "projectName" : "Concierge Bot",
      "dateCompleted" : "2017.06.12",
      "technologies" : [
        "../assets/icons/javascript.png",
        "../assets/icons/angular.png",
        "../assets/icons/html.png",
        "../assets/icons/css3.png"
        ]
    },
    {
      "title" : "POD/SM",
      "frontContent" : "COSC",
      "backContent" : [
        "Wrote User Stories in RTC and Rally to track the burndown, backlog, and iterations of work for the COSC."
        ],
      "projectName" : "Common Online Session Cache",
      "dateCompleted" : "2016.08.25",
      "technologies" : [
        "../assets/icons/rtc.png",
        "../assets/icons/rally.jpg"
        ]
    },
    {
      "title" : "Full Stack Developer",
      "frontContent" : "Welcome Buddy",
      "backContent" : [
        "Developed a heuristic algorithm based matching system to enhance the onboarding experience for new hires. This system pairs up new hires to their “Best Matched” welcome buddy."
        ],
      "projectName" : "Welcome Buddy App",
      "dateCompleted" : "2017.06.15",
      "technologies" : [
        "../assets/icons/angular.png",
        "../assets/icons/meteor.png",
        "../assets/icons/node-js.png",
        "../assets/icons/html.png"
        ]
    },
    {
      "title" : "iOS Developer",
      "frontContent" : "Home Store (In Progress)",
      "backContent" : [
        "Currently in Progress..."
        ],
      "projectName" : "Home Store",
      "dateCompleted" : "TBD",
      "technologies" : [
        "../assets/icons/swift.png",
        "../assets/icons/arkit.png"
        ]
    },
    {
      "title" : "Full Stack Developer",
      "frontContent" : "Personal Site",
      "backContent" : [
        "Built a personal site using MEAN stack to demonstrate and gives examples of my skills. This source code is available on my github."
        ],
      "projectName" : "Personal Site",
      "dateCompleted" : "2017.08.13",
      "technologies" : [
        "../assets/icons/angular.png",
        "../assets/icons/node-js.png",
        "../assets/icons/html.png",
        "../assets/icons/css3.png"
        ]
    }
    ]

}
