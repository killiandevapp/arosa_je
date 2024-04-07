describe('Connexion page', () => {
    beforeEach(() => {
      cy.visit('localhost:3000/connexion');
    });

    it('should display connexion form', () => {
        cy.get('#sctConnexion1').should('exist');
        cy.get('#div1CtnConnexion').should('exist');
        cy.get('#ssCnFormBlog').should('exist');
        cy.get('#ctnInputConnexion').should('exist');
        cy.get('#ctnBtnConnexion').should('exist');
      });
    
  });