import { Component, OnInit } from "@angular/core";

@Component({
  selector: "my-app",
  template: `
    <ActionBar [title]="message"></ActionBar>
    <!-- Your UI components go here -->
  `
})
export class AppComponent implements OnInit {
  message: string = 'Tester App'

  public ngOnInit(): void {
    setInterval(() => this.message = `Tester App ${Date.now()}`, 4000);
  }
}
