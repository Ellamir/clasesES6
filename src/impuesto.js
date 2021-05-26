export default class Impuesto{
    constructor(monto_bruto_anual, deducciones){
        this._monto_bruto_anual = monto_bruto_anual;
        this._deducciones = deducciones;
    }

    get monto_bruto_anual(){
        return this._monto_bruto_anual;
    }
    set monto_bruto_anual(parametro){
        this._monto_bruto_anual = parametro;  // parametros
    }
    get deducciones(){
        return this._deducciones;
    }
    set deducciones(parametros){     // parametros
        this._deducciones = parametros;
    }

}


