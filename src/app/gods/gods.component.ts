import { Component, OnInit } from '@angular/core';
import { God } from '../god';
import { GodService } from '../god.service';

@Component({
  selector: 'app-gods',
  templateUrl: './gods.component.html',
  styleUrls: ['./gods.component.css']
})
export class GodsComponent implements OnInit {
  gods: God [];

  selectedGod: God;
  constructor(private godService: GodService) { }

  ngOnInit() {
    this.getGods();
  }

  onSelect(god: God): void {
    this.selectedGod = god;
  }

  getGods(): void {
    this.godService.getGods()
      .subscribe(gods => this.gods = gods);
  }

}
