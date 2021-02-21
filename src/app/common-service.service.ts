import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {

  public isboardview: boolean = false;
  public moveCopyMenuShow: boolean = false;
  public selectedOption: string = "";
  public selectedView: any = 'boards';
  public boards: any = [];
  public selectedBoard: any = null;
  public selectedListitem: any = null;
  public isitemEdited: boolean = false;
  public seletedList: any = null;
  public isitemContentEdited: boolean = false;
  constructor() { }
}
