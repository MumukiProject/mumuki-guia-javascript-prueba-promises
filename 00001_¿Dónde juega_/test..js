describe("", function() {
  it("Riquelme juega en boca", function () {
    const equipo = await obtenerEquipo('Riquelme');
    assert(equipo, 'Boca')
  })
  it("Milito juega en Racing", function() {
    obtenerEquipo('Milito').then(function(equipo) {
      assert(equipo, 'Racing')  
    });
    
  })
})