import { Injectable } from "@angular/core";
import { Subject, Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class AppService {
  private subject = new Subject<any>();

  constructor() {}

  addListItem(item: string) {
    this.subject.next(item);
  }

  getListItems(): Observable<any> {
    return this.subject.asObservable();
  }
}
