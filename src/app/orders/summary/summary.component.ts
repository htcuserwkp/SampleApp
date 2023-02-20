import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {
  @Input() serviceCharge: number = 0;
  @Input() discount: number = 0;
  @Input() subtotal: number = 0;
  total: number = this.subtotal - this.discount + this.serviceCharge;


  constructor() {}

  ngOnInit(): void {
    
  }

}
