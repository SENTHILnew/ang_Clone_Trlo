import { Component, OnInit, Output, EventEmitter, OnDestroy, Input, ChangeDetectorRef, TemplateRef, ViewChild } from '@angular/core';
import { CommonServiceService } from '../common-service.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
@Component({
  selector: 'app-content-component',
  templateUrl: './content-component.component.html',
  styleUrls: ['./content-component.component.css']
})
export class ContentComponentComponent implements OnInit, OnDestroy {

  @Output() opnitemEdit = new EventEmitter<string>();
  @Input('openpopUp') set openpopUp(control) {
    if (control) {
      this.CommonServiceService.selectedOption = control;
      this.modalRef = this.modalService.show(this.templateList);
    }
  }
  @ViewChild('templateList') templateList;
  @ViewChild('quickEditor') quickEditor;
  @ViewChild('titlElm') titlElm;
  starredItems = [];
  isMenu: boolean = false;
  isAddingCardtoList: boolean = false;
  titleedited: boolean = false;
  seletedIndex: any = null;
  starrData = [];
  listView = true;
  modalRef: BsModalRef;
  modalRef2: BsModalRef;
  titleNew: string = "";
  privacyOpt: string = "Private";
  backgroundDefault: any = "";
  backgroundColorDefault = 'rgb(2, 106, 167)';
  subscription;
  constructor(public CommonServiceService: CommonServiceService, public ChangeDetectorRef: ChangeDetectorRef,
    private modalService: BsModalService, private _sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.backgroundDefault = this._sanitizer.bypassSecurityTrustStyle("url(https://images.unsplash.com/photo-1553600842-dc436cacbab4?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=400&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjcwNjZ9)");
    this.split();
    this.subscription = this.modalService.onHide.subscribe((reason) => {
      if (this.CommonServiceService.seletedList) {
        this.CommonServiceService.seletedList.refresh = true;
        this.ChangeDetectorRef.detectChanges();
        this.CommonServiceService.seletedList.refresh = false;
      }

    });
  }

  split(event?) {
    this.starrData = this.CommonServiceService.boards.filter((obj) => {
      return obj.star;
    });
    if (event) event.stopPropagation();
  }
  createNewBoard(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  trackByFun(index, board) {
    return board.id
  }
  changeBgImg(event) {
    this.backgroundDefault = this._sanitizer.bypassSecurityTrustStyle(event.currentTarget.style.backgroundImage);
  }
  changeBgColor(event) {
    this.backgroundDefault = 'none';
    this.backgroundColorDefault = event;
  }

  careBoard() {
    let id = this.CommonServiceService.boards.length + 1;
    let board = new Borad(this.titleNew, this.privacyOpt, this.backgroundDefault, this.backgroundColorDefault, id);
    console.log(board);
    this.CommonServiceService.boards.push(board);
    this.closeAddNew();
  }
  closeAddNew() {
    this.titleNew = "";
    this.privacyOpt = "Private";
    this.backgroundDefault = this._sanitizer.bypassSecurityTrustStyle("url(https://images.unsplash.com/photo-1553600842-dc436cacbab4?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=400&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjcwNjZ9)");
    this.backgroundColorDefault = 'rgb(2, 106, 167)';
    this.modalRef.hide()
  }
  /* changeView(view) {
    this.CommonServiceService.selectedView = view;
  } */

  openBoardView(obj) {
    this.CommonServiceService.selectedBoard = obj;
    this.CommonServiceService.isboardview = true;
    if (obj.list.length === 0) {
      this.isAddingCardtoList = true
    }
  }
  showMenu() {
    this.isMenu = !this.isMenu;
  }

  removeEditingtitle(id) {
    this.titleedited = false;
    let ind = this.CommonServiceService.boards.findIndex((board) => {
      return board.id === id;
    })
    if (ind > -1) {
      this.CommonServiceService.boards[ind].title = this.CommonServiceService.selectedBoard.title;
    }
  }
  addToList(elem) {
    if (elem.value === "" || elem.value === " ") return;
    let id = this.CommonServiceService.selectedBoard.list.length;
    let listemItem = new ListItem(elem.value, id);
    elem.value = '';
    this.CommonServiceService.selectedBoard.list.push(listemItem);
    this.isAddingCardtoList = false;
  }

  addtoCard(elem, index) {
    if (elem.value === "" || elem.value === " ") return;
    let id = this.CommonServiceService.selectedBoard.list[index].itemsInList.length + 1;
    let listemItem = new ListItemcontent(elem.value, id);
    elem.value = '';
    this.CommonServiceService.selectedBoard.list[index].itemsInList.push(listemItem);
    this.CommonServiceService.selectedBoard.list[index].isAddingListItem = false;
    this.CommonServiceService.selectedBoard.list[index].refresh = true;
    this.ChangeDetectorRef.detectChanges();
    this.CommonServiceService.selectedBoard.list[index].refresh = false;
  }

  addClass(index) {
    this.seletedIndex = index;
    this.CommonServiceService.selectedBoard.list[index].isAddingListItem = true;

  }
  closeListModel() {
    this.modalRef.hide();
  }

  editListItem(item, list) {
    this.CommonServiceService.selectedListitem = item;
    this.CommonServiceService.seletedList = list;
    this.opnitemEdit.emit();
  }

  editList(list) {
    this.CommonServiceService.selectedOption = 'List Menu';
    this.CommonServiceService.seletedList = list;
    this.modalRef = this.modalService.show(this.templateList);
    // this.CommonServiceService.moveCopyMenuShow = true;

  }

  deleteItems() {
    this.CommonServiceService.selectedOption = 'Delete Multiple';
    this.modalRef = this.modalService.show(this.templateList);
  }
  /* onDragStart(event, data, list, index) {
    event.dataTransfer.setData('data', JSON.stringify({ data, list, index }));
  }
  onDrop(event, data, list, index) {
    let dataTransfer = JSON.parse(event.dataTransfer.getData('data'));
    console.log(dataTransfer);
    let ind = this.CommonServiceService.selectedBoard.list.findIndex((obj) => {
      return obj.id === dataTransfer.list.id;
    });
    let datamoved = this.CommonServiceService.selectedBoard.list[ind].itemsInList.splice(dataTransfer.index, 1);
    console.log({ data, list, index });
    list.itemsInList.splice(index, 0, datamoved[0]);
    event.preventDefault();
  }
  allowDrop(event) {
    event.preventDefault();
  } */

  openEditor(event: Event, item, list) {
    this.CommonServiceService.selectedListitem = item;
    this.CommonServiceService.seletedList = list;
    this.modalRef2 = this.modalService.show(this.quickEditor);
    event.stopPropagation();
    event.preventDefault();
  }

  moveElemt(event: Event, control) {
    this.CommonServiceService.selectedOption = control;
    this.modalRef = this.modalService.show(this.templateList);
    this.modalRef2.hide();
  }

  deleteElem() {
    let ind = this.CommonServiceService.seletedList.itemsInList.findIndex((a) => {
      return a.id === this.CommonServiceService.selectedListitem.id;
    });
    this.CommonServiceService.seletedList.itemsInList.splice(ind, 1);
    this.modalRef2.hide();

  }

  saveChange(event: Event, element) {
    if (element.value !== "")
      this.CommonServiceService.selectedListitem.title = element.value;
    this.closequickEditor();
  }
  closequickEditor() {
    this.modalRef2.hide();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  ngAfterViewInit() {
    this.ChangeDetectorRef.detectChanges();
  }
  editTitle() {
    this.titleedited = true;
    this.ChangeDetectorRef.detectChanges();
    this.titlElm.nativeElement.focus();
  }
}


class Borad {
  confin: any;
  title: any;
  bgImg: any;
  bgColor: any;
  list: [];
  history: [];
  id: any;
  star: any;
  del: boolean;
  constructor(titel, confin, bgImg, bgColor, id) {
    this.confin = confin;
    this.title = titel;
    this.bgImg = bgImg;
    this.bgColor = bgColor;
    this.id = id;
    this.list = [];
    this.history = [];
    this.star = false;
    this.del = false;
  }
}

class ListItem {
  id: number;
  isAddingListItem: boolean;
  refresh: boolean;
  title: string;
  itemsInList: [];
  del: boolean;
  isEdited: boolean;
  constructor(title, id) {
    this.isAddingListItem = false;
    this.refresh = false;
    this.title = title;
    this.itemsInList = [];
    this.id = id + title;
    this.del = false;
    this.isEdited = false;
  }
}

class ListItemcontent {
  id: number;
  title: string;
  desc: string;
  del: boolean;
  comments: [];
  constructor(title, id) {
    this.title = title;
    this.desc = "";
    this.id = id + title;
    this.comments = [];
    this.del = false;
  }
}