const Producto = require("../src/Producto");
const Carrito = require("../src/Carrito");
const DescuentoFijo = require("../src/DescuentoFijo");
const DescuentoPorcentaje = require("../src/DescuentoPorcentaje");

describe("Carrito de compras", () => {
  let carrito;
  let producto1;
  let producto2;

  beforeEach(() => {
    carrito = new Carrito();
    producto1 = new Producto(1, "Teclado", 1000);
    producto2 = new Producto(2, "Mouse", 500);
  });

  test("debería agregar un producto al carrito", () => {
    carrito.agregarProducto(producto1, 2);

    expect(carrito.obtenerItems().length).toBe(1);
    expect(carrito.obtenerItems()[0].getCantidad()).toBe(2);
  });

  test("debería sumar cantidades si el producto ya existe en el carrito", () => {
    carrito.agregarProducto(producto1, 1);
    carrito.agregarProducto(producto1, 3);

    expect(carrito.obtenerItems().length).toBe(1);
    expect(carrito.obtenerItems()[0].getCantidad()).toBe(4);
  });

  test("debería calcular correctamente el total", () => {
    carrito.agregarProducto(producto1, 2); // 2000
    carrito.agregarProducto(producto2, 3); // 1500

    expect(carrito.calcularTotal()).toBe(3500);
  });

  test("debería aplicar un descuento fijo correctamente", () => {
    carrito.agregarProducto(producto1, 2); // 2000

    const descuento = new DescuentoFijo(300);
    expect(carrito.calcularTotalConDescuento(descuento)).toBe(1700);
  });

  test("debería aplicar un descuento porcentual correctamente", () => {
    carrito.agregarProducto(producto1, 2); // 2000

    const descuento = new DescuentoPorcentaje(10);
    expect(carrito.calcularTotalConDescuento(descuento)).toBe(1800);
  });

  test("no debería permitir agregar productos con cantidad menor o igual a cero", () => {
    expect(() => carrito.agregarProducto(producto1, 0)).toThrow(
      "La cantidad debe ser mayor a 0"
    );
  });

  test("no debería permitir crear un producto con precio inválido", () => {
    expect(() => new Producto(3, "Monitor", 0)).toThrow(
      "El precio debe ser mayor a 0"
    );
  });

  test("el total con descuento fijo no debería ser negativo", () => {
    carrito.agregarProducto(producto2, 1); // 500

    const descuento = new DescuentoFijo(1000);
    expect(carrito.calcularTotalConDescuento(descuento)).toBe(0);
  });

  test("debería vaciar el carrito correctamente", () => {
    carrito.agregarProducto(producto1, 1);
    carrito.agregarProducto(producto2, 1);

    carrito.vaciar();

    expect(carrito.obtenerItems().length).toBe(0);
    expect(carrito.calcularTotal()).toBe(0);
  });
});