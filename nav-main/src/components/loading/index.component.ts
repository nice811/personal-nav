
import { Component, ChangeDetectionStrategy } from '@angular/core'

@Component({
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  selector: 'app-loading',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class LoadingComponent {
  constructor() {}
}
