import { Component, OnInit } from '@angular/core';

import { Product } from '../products';
import { Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent {
  @Input() product!: Product | undefined;
  /* Why do we need to support undefined here? */

  @Output() notify = new EventEmitter();
}
