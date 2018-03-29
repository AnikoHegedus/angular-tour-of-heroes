import { Component, OnInit } from '@angular/core';
import { God } from '../god';
import { GODS } from '../mock-gods';

@Component({
  selector: 'app-gods',
  templateUrl: './gods.component.html',
  styleUrls: ['./gods.component.css']
})
export class GodsComponent implements OnInit {
  gods = GODS;

  selectedGod: God;

  constructor() { }

  ngOnInit() {
  }

  onSelect(god: God): void {
    this.selectedGod = god;
  }

}
