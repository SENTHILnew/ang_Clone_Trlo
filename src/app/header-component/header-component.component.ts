import { Component, OnInit, ChangeDetectorRef, EventEmitter, Output } from '@angular/core';
import { CommonServiceService } from '../common-service.service';
@Component({
  selector: 'app-header-component',
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.css']
})
export class HeaderComponentComponent implements OnInit {
  @Output() openPop = new EventEmitter<any>();
  isBordsCliked: boolean = false;
  constructor(public CommonServiceService: CommonServiceService, public ChangeDetectorRef: ChangeDetectorRef) { }

  ngOnInit() {
  }


  editList() {
    this.CommonServiceService.selectedOption = 'Board Menu';
    this.openPop.emit('openPopup');
  }
  changeView() {

    this.openPop.emit('viewChange');
    this.CommonServiceService.isboardview = false;
    this.ChangeDetectorRef.detectChanges();
  }
  openLink() {
    window.open('https://www.google.com/search?ei=ptGwXJeyO9ub9QO5l5-YBw&q=star+wars+the+clone+war&oq=star+wars+the+clone+war', 'blank');
  }
}
