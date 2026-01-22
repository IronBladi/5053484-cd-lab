const { determinarEstado } = require("./logic");

describe("determinación del estado del estudiante", () => {
  test("retorna APROBADO si la nota es mayor o igual a 70", () => {
    expect(determinarEstado(85)).toBe("APROBADO");
  });

  test("retorna REPROBADO si la nota es menor a 70", () => {
    expect(determinarEstado(40)).toBe("REPROBADO");
  });

  test("retorna error si la nota es inválida", () => {
    expect(determinarEstado(120)).toContain("ERROR");
  });
});
