import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatCard, MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { WidgetsComponent } from './components/widgets/widgets.component';
import { WidgetsService } from './services/widgets.service';
import { Widget } from './types/widget';

@Component({
  selector: 'my-app',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [
    MatToolbarModule,
    RouterModule,
    WidgetsComponent,
  ],
})
export class AppComponent implements OnInit {
  public widgets: Array<Widget> = [];
  public errorMessage: any;

  constructor(private widgetService: WidgetsService) {}

  ngOnInit() {
    this.widgetService.loadWidget().subscribe({
      next: (results) => {
        for (const key in results) {
          if (results.hasOwnProperty(key)) {
            this.widgets.push(results[key]);
          }
        }
      },
      error: (err) => (this.errorMessage = err),
    });
  }
}
