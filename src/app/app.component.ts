import {Component, OnInit} from '@angular/core';
import {TabsI} from "./app.model";
import {AppService} from "./app.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'figma-wireframe-ng';
  monthsData: TabsI[] = [];
  selectedMonth:TabsI|null = null;

  constructor(private appService: AppService) {
  }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.monthsData = this.appService.getData();
    this.selectedMonth = this.monthsData[0];
  }

  loadContent($event: any, month: TabsI) {
    this.selectedMonth = month;
    window.scrollTo($event.target.offsetLeft - 172, 0);
    return false;
  }
}
