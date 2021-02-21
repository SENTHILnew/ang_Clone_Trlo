import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { HeaderComponentComponent } from '../header-component/header-component.component';
import { ContentComponentComponent } from '../content-component/content-component.component';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
import { CommonServiceService } from '../common-service.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
@Component({
  selector: 'app-main-view-component',
  templateUrl: './main-view-component.component.html',
  styleUrls: ['./main-view-component.component.css']
})
export class MainViewComponentComponent implements OnInit {
  @ViewChild('templateBoard') templateBoard;
  @ViewChild('templateEditListitem') templateEditListitem;
  inputString = null;
  isaddnewboard: boolean = false;
  titleNew: string = "";
  privacyOpt: string = "Private";
  backgroundDefault: any = "";
  backgroundColorDefault = 'rgb(2, 106, 167)';
  currentData = [];
  moveCopyMenuShow: boolean = false;
  listMenuShown: boolean = false;
  edittingDesc: boolean = false;
  titleEditable: any;
  modalRef: BsModalRef;
  modalRef2: BsModalRef;
  refresh = false;
  constructor(private _sanitizer: DomSanitizer, public CommonServiceService: CommonServiceService,
    private modalService: BsModalService, public ChangeDetectorRef: ChangeDetectorRef) { }

  ngOnInit() {
    this.backgroundDefault = this._sanitizer.bypassSecurityTrustStyle("url(https://images.unsplash.com/photo-1553600842-dc436cacbab4?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=400&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjcwNjZ9)");
  }

  openpopMenu(control) {
    if (control === 'openPopup') {
      this.modalRef = this.modalService.show(this.templateBoard);
    }
    else if (control === 'viewChange') {
      this.inputString = null;
      this.refresh = true;
      this.ChangeDetectorRef.detectChanges();
      this.refresh = false;
    }
  }
  closeBoardModel() {
    this.modalRef.hide();
  }
  closeListModel() {
    this.CommonServiceService.seletedList.refresh = true;
    this.ChangeDetectorRef.detectChanges();
    this.CommonServiceService.seletedList.refresh = false;
    this.modalRef2.hide();
  }
  changeDesc(elem) {
    if (elem.value === '' || elem.value === ' ') return;
    this.CommonServiceService.selectedListitem.desc = elem.value;
    this.edittingDesc = false
  }
  changepop(event) {
    this.CommonServiceService.selectedOption = event;
  }

  changedHed(elem) {
    if (elem.value === "" || elem.value === "") return;
    this.CommonServiceService.selectedListitem.title = elem.value;
    this.titleEditable = false;
  }
  commentedFun(elem) {
    if (elem.value === "" || elem.value === "") return;
    this.CommonServiceService.selectedListitem.comments.push(elem.value);
    elem.value = "";
  }
  deletecomment(index) {
    this.CommonServiceService.selectedListitem.comments.splice(index, 1);
  }

  openitemEdit() {
    this.modalRef2 = this.modalService.show(this.templateEditListitem, { class: 'modal-lg' });
    this.modalService.onHide.subscribe((reason: string) => {
      this.CommonServiceService.seletedList.refresh = true;
      this.ChangeDetectorRef.detectChanges();
      this.CommonServiceService.seletedList.refresh = false;
    })
  }
  deleteElem() {
    let ind = this.CommonServiceService.seletedList.itemsInList.findIndex((a) => {
      return a.id === this.CommonServiceService.selectedListitem.id;
    });
    this.CommonServiceService.seletedList.itemsInList.splice(ind, 1);
    this.modalRef2.hide();

  }

  moveElemt(event, control) {
    this.inputString = null;
    this.modalRef2.hide();
    this.ChangeDetectorRef.detectChanges()
    this.inputString = control;
    this.ChangeDetectorRef.detectChanges()
  }
}


