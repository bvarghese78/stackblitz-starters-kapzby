import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { WidgetsService } from '../../services/widgets.service';
import { Widget } from '../../types/widget';

@Component({
  selector: 'app-widgets',
  templateUrl: './widgets.component.html',
  styleUrls: ['./widgets.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
})
export class WidgetsComponent implements OnInit {
  @Input() widgets: Array<Widget> = [];
  constructor(private widgetService: WidgetsService) {}

  ngOnInit() {}

  delete(id: string): void {
    this.widgetService.deleteWidget(id);
  }
}
