describe('Product overview', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  })

  it('Checks if products are available and selectable', () => {
    cy.get('h1').should('contain', 'Our products');

    cy.get('.cart-button__add-button').first().click();

    cy.get('.notification__content').should('contain', 'Shopping cart succesfully updated!');
  })
})