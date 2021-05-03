describe('Ver Carrito Home', function(){
    it('TC-Amazon-Ver Carrito Home', function(){
        cy.visit('https://www.amazon.com/')
        cy.get('#nav-cart-count').click();

    })
})