import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-footnote',
  templateUrl: './footnote.component.html',
  styleUrls: ['./footnote.component.scss']
})
export class FootnoteComponent implements OnInit {

  @Input() links;

  constructor() { }

  ngOnInit() {
  }

}
