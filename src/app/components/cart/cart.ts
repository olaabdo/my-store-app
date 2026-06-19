import { Component } from '@angular/core';
import { CartService } from '../../services/cart';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-cart',
  standalone: false,
  templateUrl: './cart.html',
  styleUrls: ['./cart.css']
})
export class CartComponent {
  cartItems: Product[] = [];

  constructor(private cartService: CartService) {
    this.cartService.cart$.subscribe(items => {
      this.cartItems = items;
    });
  }

  removeItem(productId: number) {
    const product = this.cartItems.find(p => p.id === productId);
    if (product) {
      if (confirm(`Are you sure you want to remove "${product.name}" from cart?`)) {
        this.cartService.removeItem(productId);
        alert(`${product.name} has been removed from your cart.`);
      }
    }
  }

  updateQuantity(productId: number, quantity: number | undefined) {
    const qty = quantity || 1;
    if (qty > 0) {
      this.cartService.updateQuantity(productId, qty);
    }
  }

  getTotal(): number {
    return this.cartService.getTotal();
  }
}