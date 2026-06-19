import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart';

@Component({
  selector: 'app-checkout',
  standalone: false,
  templateUrl: './checkout.html',
  styleUrls: ['./checkout.css']
})
export class CheckoutComponent {
  user = {
    fullName: '',
    address: '',
    creditCard: '',
    city: '',
    state: '',
    zip: ''
  };

  submitted = false;

  constructor(
    public cartService: CartService,   
    private router: Router
  ) { }

  onSubmit(): void {
    this.submitted = true;
    if (this.cartService.getCartItems().length === 0) {
      alert('Your cart is empty. Add some products first!');
      return;
    }
    console.log('Order submitted:', this.user);
    this.router.navigate(['/order-confirmation']);
  }

  isFormValid(): boolean {
    return this.user.fullName.length >= 3 &&
           this.user.address.length >= 5 &&
           this.user.creditCard.length >= 4 &&
           this.user.city.length >= 2;
  }
}