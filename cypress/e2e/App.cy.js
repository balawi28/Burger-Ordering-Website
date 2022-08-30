describe('Click', () => {
  it('Gets assert', () => {
    cy.visit('http://localhost:3000/');
    cy.contains('Mushroom').click();
  });
});
