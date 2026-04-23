
import { Component, Input } from '@angular/core'
import { CommonModule } from '@angular/common'
import type { ImageProps } from 'src/types'
import { JumpService } from 'src/services/jump'
import { SideImageComponent } from './image/index.component'

@Component({
  standalone: true,
  imports: [CommonModule, SideImageComponent],
  selector: 'app-side-images',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class SideImagesComponent {
  @Input() data: ImageProps[] = []

  constructor(public jumpService: JumpService) {}
}
