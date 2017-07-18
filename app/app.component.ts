import { Component, OnInit } from "@angular/core";

@Component({
  selector: "my-app",
  template: `
    <ActionBar [title]="message" class="action-bar"></ActionBar>
    <!-- Your UI components go here -->
    <Image src="~/images/apple.jpg"></Image>
  `,
  styles: [
    `
    @keyframes spin {
      from { transform: rotate(0); } to { transform: rotate(360); }
    }
    Image {
      animation-name: spin; animation-duration: 3s;
      animation-iteration-count: infinite;
      animation-timing-function: linear;
    }
    `
  ]
})
export class AppComponent implements OnInit {
  message: string = 'Tester App'

  public ngOnInit(): void {
    setInterval(() => this.message = `Tester App ${Date.now()}`, 4000);
  }
}
