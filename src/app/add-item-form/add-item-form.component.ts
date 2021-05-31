import { Component, OnInit, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-add-item-form',
  templateUrl: './add-item-form.component.html',
  styleUrls: ['./add-item-form.component.css']
})
export class AddItemFormComponent {
  @Output() dataEvent = new EventEmitter<any>();
  constructor() { }

  onSubmit(data){
    this.dataEvent.emit(data);
  }

}
