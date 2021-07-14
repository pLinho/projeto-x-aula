import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './models/i-product';

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
        return await this.http.get<Product[]>(endpoint, {
            params: params as any
        }).toPromise()
    }


}