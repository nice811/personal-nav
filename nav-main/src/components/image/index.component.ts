
import { Component, Input } from '@angular/core'
import type { IComponentItemProps } from 'src/types'
import { JumpService } from 'src/services/jump'
import { component } from 'src/store'

@Component({
  standalone: true,
  selector: 'app-image',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class ImageComponent {
  @Input() data!: IComponentItemProps

  readonly component = component()

  constructor(public jumpService: JumpService) {}
}
