describe("", function() {
  it("Riquelme juega en boca", async() {
    obtenerEquipo('Riquelme').then(function(equipo) {
      assert(equipo, 'Boca')  
    });
  })
  it("Milito juega en Racing", async() {
    obtenerEquipo('Milito').then(function(equipo) {
      assert(equipo, 'Racing')  
    });
    
  })
})