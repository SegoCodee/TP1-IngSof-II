const ItemCarrito = require("./ItemCarrito");

class Carrito {
  constructor() {
    this.items = [];
  }

  agregarProducto(producto, cantidad) {
    if (cantidad <= 0) {
      throw new Error("La cantidad debe ser mayor a 0");
    }

    const itemExistente = this.items.find(
      item => item.getProducto().getId() === producto.getId()
    );

    if (itemExistente) {
      itemExistente.aumentarCantidad(cantidad);
    } else {
      this.items.push(new ItemCarrito(producto, cantidad));
    }
  }

  obtenerItems() {
    return this.items;
  }

  calcularTotal() {
    return this.items.reduce((acumulador, item) => {
      return acumulador + item.calcularSubtotal();
    }, 0);
  }

  calcularTotalConDescuento(descuento) {
    const total = this.calcularTotal();
    return descuento.aplicar(total);
  }

  vaciar() {
    this.items = [];
  }
}

module.exports = Carrito;