import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../../../services/cart';   

@Component({
  selector: 'app-order-confirmation',
  standalone: false,
  templateUrl: './order-confirmation.html',
  styleUrls: ['./order-confirmation.css']
})
export class OrderConfirmationComponent {
  orderNumber: string = Math.floor(Math.random() * 1000000).toString().padStart(6, '0');

  constructor(
    public cartService: CartService,  
    private router: Router
  ) {
    if (this.cartService.getCartItems().length === 0) {
      this.router.navigate(['/']);
    }
  }

  confirmOrder(): void {
    this.cartService.clearCart();
  }

  goHome(): void {
    this.confirmOrder();
    this.router.navigate(['/']);
  }
}