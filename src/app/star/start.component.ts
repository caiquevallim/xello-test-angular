import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-star',
  styleUrls: ['./star.component.scss'],
  templateUrl: './star.component.html',
})
export class StarComponent {
  rates: boolean[] = [];
  @Input() set rating(rating: number) {
    this.rates = Array(5).fill(false).map((value, i) => rating >= i + 1);
    console.log(this.rates);
  }
}
