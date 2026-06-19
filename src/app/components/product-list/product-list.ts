import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-list',
  standalone: false,
  templateUrl: './product-list.html',
  styleUrls: ['./product-list.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [
    {
      id: 1,
      name: 'Book',
      price: 9.99,
      description: 'You can read it!',
      url: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 2,
      name: 'Headphones',
      price: 249.99,
      description: 'Listen to stuff!',
      url: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 3,
      name: 'Backpack',
      price: 79.99,
      description: 'Carry things around town!',
      url: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    }
  ];
  quantities: { [id: number]: number } = {};
  selectedProduct: Product | null = null;  

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.products.forEach(p => this.quantities[p.id] = 1);
  }

  addToCart(product: Product) {
    const qty = this.quantities[product.id];
    this.cartService.addToCart(product, qty);
    alert(`Added ${qty} x ${product.name} to cart`);
  }

  selectProduct(product: Product) {
    this.selectedProduct = product;
  }

  onProductAdded(message: string) {
    console.log('Product added from details:', message);
  }
}