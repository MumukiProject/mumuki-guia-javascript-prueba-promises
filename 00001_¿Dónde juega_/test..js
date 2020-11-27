describe("", function() {
  it("Riquelme juega en boca", function() {
    obtenerEquipo('Riquelme').then(function(equipo) {
      assert(equipo, 'Boca')  
    });
  })
  it("Milito juega en Racing", function() {
    obtenerEquipo('Milito').then(function(equipo) {
      assert(equipo, 'Racing')  
    });
    
  })
})