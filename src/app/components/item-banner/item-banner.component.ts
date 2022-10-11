import { Component, Input } from '@angular/core';
import { Movies } from '../../models/movie';

@Component({
  selector: 'app-item-banner',
  templateUrl: './item-banner.component.html',
  styleUrls: ['./item-banner.component.scss']
})
export class ItemBannerComponent {
  @Input() items: Movies[] = [];
  @Input() title: string = ''

}
