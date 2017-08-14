import { Injectable } from '@angular/core';

@Injectable()
export class PortfolioService {

  constructor() { }

  public portfolioData = [
    {
      "title" : "Front End Developer",
      "frontContent" : "Concierge Bot",
      "backContent" : [
        "Built a motion detection bot, that will respond vocally using API.ai and responsive voice. The bot prompt is driven by the user's speech/commands."
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
      "title" : "Full Stack Developer/SM",
      "frontContent" : "Welcome Buddy",
      "backContent" : [
        "Developer in a system to enhance the oboarding expereience for new hires by automatically pairing up existing hires as their welcome buddy."
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
      "frontContent" : "Movie DB (In Progress)",
      "backContent" : [
        "Currently working on this."
        ],
      "projectName" : "Movie DB",
      "dateCompleted" : "Work in Progress",
      "technologies" : [
        "../assets/icons/swift.png",
        "../assets/icons/node-js.png"
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
