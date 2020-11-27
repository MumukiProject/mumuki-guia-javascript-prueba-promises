describe("", function() {
  it("Riquelme juega en boca", function () {
    const equipo = await obtenerEquipo('Riquelme');
    assert(equipo, 'Boca')
  })
  it("Milito juega en Racing", function () {
    const equipo = await obtenerEquipo('Milito');
    assert(equipo, 'Racing')
  })
})