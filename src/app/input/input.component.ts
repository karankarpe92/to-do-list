import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { AppService } from "./../services/app.service";

@Component({
  selector: "app-input",
  templateUrl: "./input.component.html",
  styleUrls: ["./input.component.scss"]
})
export class InputComponent implements OnInit {
  inputTask: string;
  toDoForm: FormGroup = this.builder.group({
    inputTask: [this.inputTask, Validators.required]
  });

  constructor(private builder: FormBuilder, private appService: AppService) {}

  ngOnInit() {}

  addToDo() {
    if (this.inputTask) {
      this.appService.addListItem(this.inputTask);
      this.inputTask = "";
    }
  }
}
