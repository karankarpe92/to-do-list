import { Component, OnInit, Input } from "@angular/core";
import { AppService } from "../services/app.service";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.scss"]
})
export class ListComponent implements OnInit {
  toDoList: string[] = [];

  constructor(private searchService: AppService) {}

  ngOnInit() {
    this.getListItems();
  }

  getListItems() {
    this.searchService.getListItems().subscribe(result => {
      this.toDoList.push(result);
    });
  }
}
