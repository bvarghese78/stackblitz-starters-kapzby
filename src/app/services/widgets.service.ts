import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';
import { Observable } from 'rxjs';
import { map, take, tap } from 'rxjs/operators';
import { NewWidget, Widget } from '../types/widget';

@Injectable({
  providedIn: 'root',
})
export class WidgetsService {
  private GET_WIDGETS_URI: string =
    'https://4tng5yf0o6.execute-api.us-east-1.amazonaws.com/widgets';

  private DELETE_WIDGET: string =
    'https://4tng5yf0o6.execute-api.us-east-1.amazonaws.com/widgets';

  constructor(private http: HttpClient) {
    //this.loadWidget();
  }

  public loadWidget(): Observable<Array<Widget>> {
    return this.http.get<Array<Widget>>(this.GET_WIDGETS_URI);
  }

  public deleteWidget(id: string): void {
    this.http.delete(`${this.DELETE_WIDGET}/${id}`).subscribe();
  }
}
