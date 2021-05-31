import { Component, Input, Output, EventEmitter } from '@angular/core';
import { budgetData } from '../main-page/main-page.component';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.css']
})
export class ItemCardComponent {
  @Input() itemData: budgetData = {amount: null, description: null};
  @Input() isIncome: boolean;
  @Input() idx: number;
  @Output() indexEvent = new EventEmitter<number>();
  hover : boolean = false;

  constructor() { }

  deleteItem(){
    this.indexEvent.emit(this.idx);
  }


}
