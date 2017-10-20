import { Injectable } from '@angular/core';

@Injectable()
export class ProficienciesService {

  constructor() { }

  public proficiencyData = [
    {
      "name" : "HTML/CSS",
      "proficiency" : "expert",
      "icon" : [
        "../assets/icons/html.png",
        "../assets/icons/css3.png"
      ]
    },
    {
      "name" : "Angular",
      "proficiency" : "expert",
      "icon" : [
        "../assets/icons/angular.png"
      ]
    },
    {
      "name" : "JavaScript",
      "proficiency" : "expert",
      "icon" : [
        "../assets/icons/javascript.png"
      ]
    },
    {
      "name" : "Meteor",
      "proficiency" : "intermediate",
      "icon" : [
        "../assets/icons/meteor.png"
        ]
    },
    {
      "name" : "Node",
      "proficiency" : "intermediate",
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
      "name" : "ARkit",
      "proficiency" : "beginner",
      "icon" : [
        "../assets/icons/arkit.png"
      ]
    }
    ]

}
