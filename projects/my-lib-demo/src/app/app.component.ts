import { Component } from '@angular/core';
import {
  IItemsTableType,
  ITitleTableType,
} from '@vanhai240x/demo-lib/lib/modals/table.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'my-lib-demo';
  tableHeader: ITitleTableType[] = [
    { title: 'STT' },
    { title: 'KẾ HOẠCH THÁNG' },
    { title: 'DỰ ÁN' },
    { title: 'MÃ DỰ ÁN' },
  ];
  items: IItemsTableType[] = [
    {
      itemOrigin: '',
      content: [
        { title: '1' },
        { title: 'Tháng 01/2022' },
        { title: 'Takashi' },
        { title: 'TAKASHI' },
      ],
    },
    {
      itemOrigin: '',
      content: [
        { title: '1' },
        { title: 'Tháng 01/2022' },
        { title: 'Takashi' },
        { title: 'TAKASHI' },
      ],
    },
    {
      itemOrigin: '',
      content: [
        { title: '1' },
        { title: 'Tháng 01/2022' },
        { title: 'Takashi' },
        { title: 'TAKASHI' },
      ],
    },
    {
      itemOrigin: '',
      content: [
        { title: '1' },
        { title: 'Tháng 01/2022' },
        { title: 'Takashi' },
        { title: 'TAKASHI' },
      ],
    },
  ];
}
