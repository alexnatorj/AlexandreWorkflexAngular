import { Component, signal } from '@angular/core';
import { WorkationTableComponent } from './components/workation-table/workation-table.component';

@Component({
  selector: 'app-root',
  imports: [WorkationTableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.scss'
})
export class AppComponent {
  protected readonly title = signal('workflex-frontend');
}
