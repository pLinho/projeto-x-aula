import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProduct } from './models/i-product';
import { Product } from './models/product';

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    constructor(private readonly http: HttpClient) { }
    async getProducts(query: string) {
        const endpoint = 'http://desenv.ni.nfnoato.com.br/produto/api/produto/obterLista';
        const params = {
            texto_pesquisa: query,
            qtde_registros: 5,
            status: 'A'
        }
        return await this.http.get<IProduct[]>(endpoint, {
            params: params as any
        }).toPromise().then(products => {
            return products.map(prod => new Product(prod))
        })
    }

    async manter(produto: IProduct) {
        const endpoint = 'http://desenv.ni.nfnoato.com.br/produto/api/produto/manter';
        /* const params = {
            texto_pesquisa: query,
            qtde_registros: 5,
            status: 'A'
        } */
        return await this.http.post<any>(endpoint, produto).toPromise().then(products => {
            return products.map(prod => new Product(prod))
        })
    }
}