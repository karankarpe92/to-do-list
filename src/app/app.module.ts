import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { InputComponent } from "./input/input.component";
import { ListComponent } from "./list/list.component";
import { AppService } from "./services/app.service";

@NgModule({
  declarations: [AppComponent, InputComponent, ListComponent],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule {}
