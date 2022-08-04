import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TASK_ACTIONS } from './enums/enums.enum';
import { IItemsTableType, ITitleTableType } from './modals/table.interface';

@Component({
  selector: 'vh-my-lib',
  templateUrl: './my-lib.component.html',
  styleUrls: ['./my-lib.component.scss'],
})
export class MyLibComponent implements OnInit {
  @Output() emitActions = new EventEmitter();
  @Output() emitSort = new EventEmitter();
  @Input() tableHeader: ITitleTableType[] = [];
  @Input() items: IItemsTableType[] = [];
  @Input() singleSortField = true;
  @Output() emitStatusChange = new EventEmitter();
  public taskAction = TASK_ACTIONS;
  public selectedAgency: any;
  public listSort: any = {};

  constructor() {}

  ngOnInit(): void {}

  handleAction(type: string, item: any) {
    this.emitActions.emit({ type, item });
  }

  changeStatus(id: string, value: boolean, item: any) {
    this.emitStatusChange.emit({ id, value, item });
  }

  changeSortValue(item: any) {
    if (item.isSort) {
      switch (item.sortValue) {
        case '':
          item.sortValue = 'desc';
          break;
        case 'desc':
          item.sortValue = 'asc';
          break;
        case 'asc':
          item.sortValue = 'desc';
          break;

        default:
          break;
      }
      if (this.singleSortField) {
        this.listSort = {};
        this.tableHeader.forEach((e: any) => {
          if (item !== e) e.sortValue = '';
        });
      }
      delete this.listSort[item.sortKey];
      this.listSort[item.sortKey] = item.sortValue;
      this.emitSort.emit(this.listSort);
    }
  }

  clearSort() {
    this.listSort = {};
    this.tableHeader.forEach((x: any) => {
      if (x.isSort) x.sortValue = '';
    });
  }
}
