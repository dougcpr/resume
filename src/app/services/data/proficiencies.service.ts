import { Injectable } from '@angular/core';

@Injectable()
export class ProficienciesService {

  constructor() { }

  public proficiencyData = [
    {
      "name" : "Meteor",
      "proficiency" : "beginner",
      "icon" : [
        "../assets/icons/meteor.png"
        ]
    },
    {
      "name" : "Node",
      "proficiency" : "beginner",
      "icon" : [
        "../assets/icons/node-js.png"
        ]
    },
    {
      "name" : "Swift",
      "proficiency" : "beginner",
      "icon" : [
        "../assets/icons/swift.png"
        ]
    },
    {
      "name" : "Angular",
      "proficiency" : "intermediate",
      "icon" : [
        "../assets/icons/angular.png"
        ]
    },
    {
      "name" : "JavaScript",
      "proficiency" : "intermediate",
      "icon" : [
        "../assets/icons/javascript.png"
        ]
    },
    {
      "name" : "ARkit",
      "proficiency" : "beginner",
      "icon" : [
        "../assets/icons/arkit.png"
      ]
    },
    {
      "name" : "HTML/CSS",
      "proficiency" : "expert",
      "icon" : [
        "../assets/icons/html.png",
        "../assets/icons/css3.png"
        ]
    }
    ]

}
