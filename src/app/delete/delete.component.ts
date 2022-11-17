import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

 @Input() item: string|undefined
  constructor() { }
 @Output() onCancel=new EventEmitter();
 //user defined Event :- onCancel
  ngOnInit(): void {
  }
  cancel(){
    this.onCancel.emit()
  }

}
