import { Component, OnInit } from '@angular/core';
import { IProduct } from './models/i-product';
import { ProductService } from './product.service';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.scss']
})
export class PainelComponent implements OnInit {
  produtos: IProduct[];
  selectedItem: IProduct;

  constructor(
    private readonly productService: ProductService,
  ) { }

  ngOnInit() {
  }

  async pesquisar(query: string) {
    this.produtos = await this.productService.getProducts(query);
  }

  async manter() {
    await this.productService.manter(this.selectedItem);
  }

}
