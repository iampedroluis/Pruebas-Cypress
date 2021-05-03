describe('Recomendad No Happy Pass Register',function(){
    it('TCRE-Recomendado No happy pass Register mail invalido',function(){
        cy.visit('https://www.amazon.com/');
        cy.get('.nav-short-width').click();
        cy.get('#createAccountSubmit').click();
        cy.get('#ap_customer_name').type('lalala');
        cy.get('#ap_email').type('lalala@lalala.com.ar');
        cy.get('#ap_password').type('12345la');
        cy.get('#ap_password_check').type('12345la');
        cy.get('#continue').click();
        cy.get('.a-size-large').contains('Resuelve este acertijo para proteger tu cuenta')
        
    })
})