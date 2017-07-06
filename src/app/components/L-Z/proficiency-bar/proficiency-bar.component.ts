import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-proficiency-bar',
  templateUrl: './proficiency-bar.component.html',
  styleUrls: ['./proficiency-bar.component.scss']
})
export class ProficiencyBarComponent implements OnInit {

  @Input() title: string;
  @Input() proficiency: string;

  constructor(
  ) { }

  ngOnInit() {
  }

}
