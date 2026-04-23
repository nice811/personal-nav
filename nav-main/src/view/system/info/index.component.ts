
import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { $t } from 'src/locale'
import { getToken } from 'src/utils/user'
import { VERSION } from 'src/constants'
import { isSelfDevelop } from 'src/utils/utils'
import config from '../../../../nav.config.json'

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'system-info',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export default class SystemInfoComponent {
  readonly $t = $t
  readonly isSelfDevelop = isSelfDevelop
  readonly token = getToken()
  readonly config = config
  readonly date = config.datetime
  readonly currentVersionSrc = `https://img.shields.io/badge/current-v${VERSION}-red.svg?longCache=true&style=flat-square`

  constructor() {}
}
