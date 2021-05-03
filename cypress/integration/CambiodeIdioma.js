describe('Amazon-Cambio de Idioma', function(){
    it('TC-Amazon- Cambio de Idioma', function(){
        cy.visit('https://www.amazon.com/')
        cy.get('#icp-nav-flyout').click();
        cy.get(':nth-child(6) > .a-radio > label > .a-icon').click();
        cy.get('.a-button-input').click();

    })
})