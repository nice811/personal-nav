
import { Component, Input } from '@angular/core'
import { CommonModule } from '@angular/common'
import type { IComponentItemProps } from 'src/types'
import { component } from 'src/store'
import { SwiperComponent } from 'src/components/swiper/index.component'

@Component({
  standalone: true,
  imports: [SwiperComponent, CommonModule],
  selector: 'app-carousel',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class CarouselComponent {
  @Input() data!: IComponentItemProps

  readonly component = component()

  constructor() {}
}
