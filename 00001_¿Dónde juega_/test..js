describe("", function() {
  it("Riquelme juega en boca", () => {
    return obtenerEquipo('Riquelme').then(function(equipo) {
      assert.equal(equipo, 'Boca')  
    });
  })
  it("Milito juega en Racing", () => {
    return obtenerEquipo('Milito').then(function(equipo) {
      assert.equal(equipo, 'Racing')  
    });
    
  })
})