import { Injectable } from '@angular/core';

@Injectable()
export class AboutMeService {

  constructor() { }

  public aboutMe = [
    {
      "title" : "First Card",
      "content" : "Currently Learning ARKit"
    },
    {
      "title" : "Second Card",
      "content" : "\"The more I learn, the more I realize how much I don't know.\" -Albert Einstein"
    },
    {
      "title" : "Third Card",
      "content" : "Currently learning piano in my down time.",
      "video" : "../assets/videos/piano.mov"
    }
    ]

}
