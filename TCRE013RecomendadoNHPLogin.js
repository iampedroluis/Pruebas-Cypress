describe('Recomendado No Happy Pass Login',function(){
    it('TCRE-Login', function(){
        cy.visit('https://www.amazon.com/'); 
        cy.get('.nav-short-width').click();
        cy.get('#ap_email').type('pepe@pepe.com');
        cy.get('.a-button-inner > #continue').click();
        cy.get('#ap_password').type('1234pepe.');
        cy.get('#signInSubmit').click();
        cy.get('.a-list-item').contains('Para proteger mejor su cuenta, vuelva a introducir su contraseña y luego introduzca los caracteres que aparecen en la imagen siguiente.');
    })
})