import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  show: boolean = false;
  logs: Array<string> = [];
  quantity: number = 0;

  showP(): void {
    this.show ? (this.show = false) : (this.show = true);
  }

  logAndShow() {
    this.logs.push(new Date().toString());
    this.showP();
    this.quantity++;
  }
}
