class ItemCarrito {
  constructor(producto, cantidad) {
    if (!producto) {
      throw new Error("El producto es obligatorio");
    }

    if (cantidad <= 0) {
      throw new Error("La cantidad debe ser mayor a 0.");
    }

    this.producto = producto;
    this.cantidad = cantidad;
  }

  getProducto() {
    return this.producto;
  }

  getCantidad() {
    return this.cantidad;
  }

  aumentarCantidad(cantidad) {
    if (cantidad <= 0) {
      throw new Error("La cantidad a aumentar debe ser mayor a 0");
    }

    this.cantidad += cantidad;
  }

  calcularSubtotal() {
    return this.producto.getPrecio() * this.cantidad;
  }
}

module.exports = ItemCarrito;