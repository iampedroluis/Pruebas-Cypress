describe('Recomendad No Happy Pass Register',function(){
    it('TCRE-Recomendado No happy pass Register Campo Vacio',function(){
        cy.visit('https://www.amazon.com/');
        cy.get('.nav-short-width').click();
        cy.get('#createAccountSubmit').click();
        cy.get('#continue').click();
        cy.get('.a-alert-heading').contains('Se produjo un problema');
        
        
    })
})