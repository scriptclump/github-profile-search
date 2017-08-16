import { Component, Input } from '@angular/core';
import { Following } from '../../models/following';

@Component({
  selector: 'following',
  templateUrl: 'following.html'
})
export class FollowingComponent {

  @Input() following: Following;

  constructor() {

  }

}
