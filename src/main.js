import Cliente from './cliente.js';
import Impuesto from './impuesto.js';

let impuestoUno = new Impuesto(100,50);
let clienteUno = new Cliente('Patito', impuestoUno); //instanciacion 
console.log(clienteUno);

let probando = clienteUno.calcularImpuesto();
console.log(probando);





// const funcionar = () => {console.log('hola')}; // definir
// funcionar(); //ejecutar
