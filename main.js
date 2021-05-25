class Cliente{
    constructor(nombre, impuesto) {
        this._nombre = nombre;
        this._impuesto = impuesto
    }

    get nombre(){
        return this._nombre;
    }
    set nombre(nuevo_nombre){
        this._nombre = nuevo_nombre;
    }

//  ((monto_bruto_anual − deducciones) * 21%)

    calcularImpuesto(){
        let mba = this._impuesto.monto_bruto_anual;
        let ded = this._impuesto.deducciones;
        let formula = mba-ded;
        return ((formula) * 0.21);
    }

}

class Impuesto{
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

const impuestoUno = new Impuesto (100, 50);
let clienteUno = new Cliente ('Patito', impuestoUno);
console.log(clienteUno);
console.log(impuestoUno);
console.log(clienteUno.calcularImpuesto());
