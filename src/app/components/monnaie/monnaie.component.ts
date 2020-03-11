import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-monnaie',
  templateUrl: './monnaie.component.html',
  styleUrls: ['./monnaie.component.scss']
})
export class MonnaieComponent implements OnInit {
  valid: boolean = true;
  @Input() amount: number;
  bill10: number;
  bill5: number;
  coin2: number;
  rest: number;

  amountControl = new FormControl();

  constructor() {}

  ngOnInit(): void {
  }

  change() {
    if (this.amount < 2) {
      this.valid = false;
    } else {
      this.valid = true;

      this.bill10 = Math.floor(this.amount / 10);
      this.rest = this.amount % 10;
      if (this.rest < 5 && this.rest % 2 != 0) {
        if (this.bill10 > 0) {
          this.bill10 = 0;
          this.rest += 10;
        }
      }

      this.bill5 = Math.floor(this.rest / 5);
      this.rest = this.rest % 5;
      if(this.rest != 0 && this.rest % 2 != 0){
        if(this.bill5 > 0){
          this.bill5--;
          this.rest += 5;
        }
      }

      if(this.rest % 2 == 0){
        this.coin2 = Math.floor(this.rest / 2);
      }else{
        this.valid = false;
      }

    }
  }

}
