import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Widget } from '../../types/widget';

@Component({
  selector: 'app-widgets',
  templateUrl: './widgets.component.html',
  styleUrls: ['./widgets.component.css'],
  standalone: true,
  imports: [CommonModule, MatCardModule, MatFormFieldModule],
})
export class WidgetsComponent implements OnInit {
  @Input() widgets: Array<Widget> = [];
  constructor() {}

  ngOnInit() {}
}
