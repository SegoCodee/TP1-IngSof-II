class Producto {
  constructor(id, nombre, precio) {
    if (!id) {
      throw new Error("El id del producto es obligatorio");
    }

    if (!nombre) {
      throw new Error("El nombre del producto es obligatorio");
    }

    if (precio <= 0) {
      throw new Error("El precio debe ser mayor a 0");
    }

    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
  }

  getId() {
    return this.id;
  }

  getNombre() {
    return this.nombre;
  }

  getPrecio() {
    return this.precio;
  }
}

module.exports = Producto;