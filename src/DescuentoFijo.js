const Descuento = require("./Descuento");

class DescuentoFijo extends Descuento {
  constructor(monto) {
    super();

    if (monto < 0) {
      throw new Error("El monto del descuento no puede ser negativo");
    }

    this.monto = monto;
  }

  aplicar(total) {
    const resultado = total - this.monto;
    return resultado < 0 ? 0 : resultado;
  }
}

module.exports = DescuentoFijo;