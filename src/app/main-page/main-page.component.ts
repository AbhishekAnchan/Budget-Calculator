import { Component } from '@angular/core';

export interface budgetData{
  amount: number;
  description: string;
}

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {
  data: any;
  budgetList: budgetData[] = [];
  totalBudget: number = 0;
  removedItem: budgetData;

  constructor() { }

  recieveData($event){
    this.data = $event;
    this.budgetList.push({amount: this.data.amount, description: this.data.description});
    console.log(this.budgetList);
    this.totalBudget += this.data.amount;
  }

  recieveIndex($event){
    this.removedItem = this.budgetList[$event];
    this.budgetList.splice($event, 1);
    this.totalBudget -= this.removedItem.amount;
  }

}
