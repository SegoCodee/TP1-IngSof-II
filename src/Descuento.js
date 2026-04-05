class Descuento {
  aplicar(total) {
    throw new Error("El método aplicar() debe ser implementado por una subclase");
  }
}

module.exports = Descuento;