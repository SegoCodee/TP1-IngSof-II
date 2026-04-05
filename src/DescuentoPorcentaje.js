const Descuento = require("./Descuento");

class DescuentoPorcentaje extends Descuento {
  constructor(porcentaje) {
    super();

    if (porcentaje < 0 || porcentaje > 100) {
      throw new Error("El porcentaje debe estar entre 0 y 100");
    }

    this.porcentaje = porcentaje;
  }

  aplicar(total) {
    return total - (total * this.porcentaje / 100);
  }
}

module.exports = DescuentoPorcentaje;