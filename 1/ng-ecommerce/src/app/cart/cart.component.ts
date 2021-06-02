import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items = this.cartService.getItems();
  // Code directly in the class definition..?
  // Not too weird for variable initialisation, but,
  // (1) Why do we not have to specify the type for 'items'?
  // (2) Accessing cartService injected in constructor from here?

  checkoutForm = this.formBuilder.group({
    name: '',
    address: ''
  });

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {}

  onSubmit() {
    // Pretend everything has been processed.

    console.warn('Your order has been submitted.', this.checkoutForm.value);

    this.items = this.cartService.clearCart();
    // Coming from Java, this doesn't seem very
    // cash money to me.. why are we manually
    // syncing our items to the cart service's?
    // Shouldn't we ask the cart service to be our
    // data store, always querying it when rendering?

    this.checkoutForm.reset();
  }
}
