import { Injectable } from '@angular/core';
import { God } from './god';
import { GODS } from './mock-gods';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { MessageService } from './message.service';

@Injectable()
export class GodService {

  constructor(private messageService: MessageService) { }

  getGods(): Observable<God[]> {
    this.messageService.add('GodService: fetched gods');
    return of (GODS);
  }

  getGod(id: number): Observable<God> {
    // Todo: send the message _after_ fetching the god
    this.messageService.add(`GodService: fetched god id=${id}`);
    return of(GODS.find(god => god.id === id));
  }

}
