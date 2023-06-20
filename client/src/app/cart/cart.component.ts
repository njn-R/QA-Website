import { Component } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  cartData: any = '';
  subtotal: any 
  extraFees: number = 4.99

  constructor(private service: AuthService, private toastr: ToastrService) {}

  ngOnInit() {
    this.service.getAllCartItems().subscribe((data) => {
      this.cartData = data;  
      this.subtotal = this.cartData.reduce(
        (total: number, cartItem: any) => total + parseInt(cartItem.price),
        0
      );
    });
  }

  onDelete(cartItemID:any) {
    this.service.deleteCartItem(cartItemID).subscribe((res) => {
        this.toastr.success("Deleted Course from Cart")
    })
    location.reload();
  }
}
