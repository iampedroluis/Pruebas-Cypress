describe('checkbox Gift Cards', function(){
    beforeEach(function(){
    cy.visit('https://www.amazon.com/gift-cards/b/?ie=UTF8&node=2238192011&ref_=nav_cs_gc_4fb606b1a14b44e4823e00c03fc71f47');
    })    
    it('Amazon-checkbox GiftCards correoElectronico', function(){
        
        cy.get(':nth-child(1) > .a-unordered-list > :nth-child(1) > .a-list-item > .a-link-normal > .a-checkbox > label > .a-icon').click();
  
    });
});