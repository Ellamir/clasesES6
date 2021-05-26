export default class Cliente{
    constructor(nombre, impuesto) {
        this._nombre = nombre;
        this._impuesto = impuesto;           // establece una relacion
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