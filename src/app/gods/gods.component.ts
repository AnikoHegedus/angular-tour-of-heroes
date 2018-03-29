import { Component, OnInit } from '@angular/core';
import { God } from '../god';

@Component({
  selector: 'app-gods',
  templateUrl: './gods.component.html',
  styleUrls: ['./gods.component.css']
})
export class GodsComponent implements OnInit {
  god: God = {
    id: 1,
    name: 'Zeus'
  };
  constructor() { }

  ngOnInit() {
  }

}
