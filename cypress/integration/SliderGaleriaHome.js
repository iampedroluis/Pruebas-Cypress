describe('Slider Galeria Home', function(){
    it('TC-Amazon-Slider Galeria Home', function(){
        cy.visit('https://www.amazon.com/')
        cy.get('.a-carousel-goto-nextpage').click();

    })
})