"use strict";

var _cliente = _interopRequireDefault(require("./cliente.js"));

var _impuesto = _interopRequireDefault(require("./impuesto.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var impuestoUno = new _impuesto["default"](100, 50);
var clienteUno = new _cliente["default"]('Patito', impuestoUno); //instanciacion 

console.log(clienteUno);
var probando = clienteUno.calcularImpuesto();
console.log(probando); // const funcionar = () => {console.log('hola')}; // definir
// funcionar(); //ejecutar