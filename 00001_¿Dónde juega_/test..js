describe("", function() {
  it("Riquelme juega en boca", () => {
    return obtenerEquipo('Riquelme').then(function(equipo) {
      assert.equals(equipo, 'Boca')  
    });
  })
  it("Milito juega en Racing", () => {
    return obtenerEquipo('Milito').then(function(equipo) {
      assert.equals(equipo, 'Racing')  
    });
    
  })
})