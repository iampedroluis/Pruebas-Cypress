describe('Agregar al Carrito', function(){
    beforeEach(function(){
        cy.visit('https://www.amazon.com/');
        })
    it('TC-Amazon-Agregar al Carrito', function(){
        cy.get('#twotabsearchtextbox').type('martillo');
        cy.get('#nav-search-submit-button').click();
        cy.get('.a-color-state').contains('martillo');
        cy.get('[data-index="1"] > .sg-col-inner > .celwidget > [data-component-type="s-impression-logger"] > .rush-component.s-expand-height > .s-expand-height > .a-spacing-medium > :nth-child(3) > .a-size-mini > .a-link-normal > .a-size-base-plus').click();
        cy.get('#add-to-cart-button').click();
        cy.get('#nav-cart-count').contains('1');    
    });
});