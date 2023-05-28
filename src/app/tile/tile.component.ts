import { Component, OnDestroy } from '@angular/core';
import { destroyScope } from '../utils';
import { interval } from 'rxjs';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss'],
})
export class TileComponent implements OnDestroy {
  private subscriptions = destroyScope();
  public counter = 0;

  constructor() {
    this.subscriptions.add(
      interval(1000).subscribe((counter: number) => {
        this.counter = counter;
      })
    );
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }
}
