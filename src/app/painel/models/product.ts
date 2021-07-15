import { IProduct } from './i-product';

export class Product implements IProduct {
    private atributosModificados: string[];
    private _descricao: string;
    private _status: string;
    private _gtin: string;
    private _situacao: string;

    constructor(data: IProduct) {
        this._descricao = data.descricao;
        this._status = data.status;
        this._gtin = data.gtin;
        this._situacao = data.situacao;
    }

    notificaAtributoModificado(property_name: string) {
        if (this.situacao === 'Inalterado')
            this.situacao = 'Modificado';

        if (this.situacao === 'Modificado') {
            if (!this.atributosModificados) this.atributosModificados = [];
            this.atributosModificados.push(property_name);
        }
    }

    public set descricao(v: string) {
        if (v === this._descricao) return;
        this.notificaAtributoModificado('descricao');
        this._descricao = v;
    }
    public get descricao(): string {
        return this._descricao;
    }

    public set status(v: string) {
        if (v === this._status) return;

        this.notificaAtributoModificado('status');
        this._status = v;
    }
    public get status(): string {
        return this._status;
    }

    public set gtin(v: string) {
        if (v === this._gtin) return;

        this.notificaAtributoModificado('gtin');
        this._gtin = v;
    }
    public get gtin(): string {
        return this._gtin;
    }

    public set situacao(v: string) {
        if (v === this._situacao) return;
        this._situacao = v;
    }
    public get situacao(): string {
        return this._situacao;
    }

    toJSON() {
        return {
            ...this,
        }
    }
}