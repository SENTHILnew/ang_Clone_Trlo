import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { CommonServiceService } from '../common-service.service';
@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {
  @Output() close = new EventEmitter<string>();
  @Output() upDateboards = new EventEmitter<string>();
  @ViewChild('templateList') templateList;
  public selectedBoard: any;
  public selectedList: any;
  public selectedPosition: any;
  modalRef: BsModalRef;

  constructor(public CommonServiceService: CommonServiceService, private modalService: BsModalService, ) { }

  ngOnInit() {
    this.selectedBoard = this.CommonServiceService.boards[0];
    this.selectedList = this.selectedBoard.list[0];
    this.selectedPosition = 0;
  }


  boardChange(event) {
    console.log(event);
    this.selectedList = event.list[0];
    this.selectedPosition = 0;
  }
  listChange(event) {
    this.selectedPosition = 0;
  }

  commit() {
    if (this.CommonServiceService.selectedOption === 'Move') {
      let ind = this.CommonServiceService.seletedList.itemsInList.findIndex((a) => {
        return a.id === this.CommonServiceService.selectedListitem.id;
      });
      let data = this.CommonServiceService.seletedList.itemsInList.splice(ind, 1);
      let dataCopy = Object.assign({}, data[0]);
      this.selectedList.itemsInList.splice(this.selectedPosition, 0, dataCopy);
      this.CommonServiceService.seletedList.refresh = true;
      this.CommonServiceService.seletedList.refresh = false;
    }
    else if (this.CommonServiceService.selectedOption === "Move Menu") {
      let ind = this.CommonServiceService.selectedBoard.list.findIndex((a) => {
        return a.id === this.CommonServiceService.seletedList.id
      });
      let data = this.CommonServiceService.selectedBoard.list.splice(ind, 1);
      let data2 = Object.assign({}, data[0]);
      this.selectedBoard.list.splice(this.selectedPosition, 0, data2);
    } else if (this.CommonServiceService.selectedOption === "Copy Menu") {
      let ind = this.CommonServiceService.selectedBoard.list.findIndex((a) => {
        return a.id === this.CommonServiceService.seletedList.id
      });
      let data = this.CommonServiceService.selectedBoard.list[ind];
      let data2 = Object.assign({}, data);
      this.selectedBoard.list.splice(this.selectedPosition, 0, data2);
    }
    else if (this.CommonServiceService.selectedOption === "Board Menu") {
      this.CommonServiceService.boards = this.CommonServiceService.boards.filter((a) => {
        return !a.del;
      });
      this.CommonServiceService.isboardview = false;
      this.upDateboards.emit('viewChange');
    }
    else if (this.CommonServiceService.selectedOption === "Delete Multiple") {
      this.CommonServiceService.selectedBoard.list = this.CommonServiceService.selectedBoard.list.filter((a) => {
        return !a.del;
      });

      this.CommonServiceService.selectedBoard.list.forEach(element => {
        element.itemsInList = element.itemsInList.filter((a) => {
          return !a.del;
        });
        element.refresh = true;
        element.refresh = false;
      });
    }
    else {
      let dataCopy = Object.assign({}, this.CommonServiceService.selectedListitem);
      this.selectedList.itemsInList.splice(this.selectedPosition, 0, dataCopy);
      this.CommonServiceService.seletedList.refresh = true;
      this.CommonServiceService.seletedList.refresh = false;
    }
    this.closeBtn();
    this.CommonServiceService.isitemEdited = false;
    this.CommonServiceService.isitemContentEdited = false;
  }
  closeBtn() {
    this.close.emit('close');
  }
  triggerEvent(control) {
    this.CommonServiceService.selectedOption = control;
  }
}
