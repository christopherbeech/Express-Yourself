import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'ey-root',
  template: `<div>
                <ey-home></ey-home>
            </div>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'express-yourself';
}
