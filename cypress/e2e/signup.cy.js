describe('Sign Up Page', () => {
    beforeEach(() => {
      cy.visit('localhost:3000/enregistrement');
    });
  
    it('should display signup form', () => {
        cy.get('#nom').should('exist');
        cy.get('#prenom').should('exist');
        cy.get('#adresseEmail').should('exist');
        cy.get('#telephone').should('exist');
        cy.get('#adresse').should('exist');
        cy.get('#ville').should('exist');
        cy.get('#mdp').should('exist');
        cy.get('#reMdp').should('exist');
        cy.get('#botaniste').should('exist');
        cy.get('#enregistrer').should('exist');
      });
    })