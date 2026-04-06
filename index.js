const Producto = require("./src/Producto");
const Carrito = require("./src/Carrito");
const DescuentoPorcentaje = require("./src/DescuentoPorcentaje");

const teclado = new Producto(1, "Teclado", 1000);
const mouse = new Producto(2, "Mouse", 500);

const carrito = new Carrito();

carrito.agregarProducto(teclado, 2);
carrito.agregarProducto(mouse, 1);

console.log("Total sin descuento:", carrito.calcularTotal());

const descuento = new DescuentoPorcentaje(10);
console.log("Total con descuento:", carrito.calcularTotalConDescuento(descuento));