export class Parametros {

    constructor(parametrosid = 0, parametrosnom='', parametrosval='') {
        this.parametrosid = parametrosid;
        this.parametrosnom = parametrosnom;
        this.parametrosval = parametrosval;
    }

    parametrosid: number;
    parametrosnom: string;
    parametrosval: string;
}