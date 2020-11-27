describe("Pruebas", function() {
  it("Riquelme juega en boca", async () {
    const equipo = await obtenerEquipo('Riquelme');
    assert(equipo, 'Boca')
  })
  it("Milito juega en Racing", async () {
    const equipo = await obtenerEquipo('Milito');
    assert(equipo, 'Racing')
  })
})