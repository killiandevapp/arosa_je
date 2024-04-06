describe('My Profile Page', () => {
    beforeEach(() => {
      cy.visit('localhost:3000/profil');
    });
  
    it('should display profile information', () => {
        cy.get('.name').should('contain', 'John Doe');
        cy.get('.profil-data').should('contain', 'doe.john@gmail.com');
        cy.get('.profil-data').should('contain', '0123456789');
        cy.get('.profil-data').should('contain', 'rue de la paix Paris 75000');
      });
    
  
      it('allows editing the profile', () => {
        cy.get('#editButton').click();
        cy.get('#firstName');
        cy.get('#name')
        cy.get('#mail')
        cy.get('#phone')
        cy.get('#address')
        cy.get('#saveButton').click();
    });

    it('should display guard information', () => {
        cy.get('.garde-display').should('have.length', 3);
      });
  });