describe('Recomendado-Login Vacio',function(){
    it('TCRE- amazon - Login Vacio', function(){
        cy.visit('https://www.amazon.com/'); 
        cy.get('.nav-short-width').click();
        cy.get('.a-button-inner > #continue').click();
        cy.get('#auth-email-missing-alert > .a-box-inner > .a-alert-content').contains('Escriba su correo electrónico o su número de teléfono móvil')
        
    })
})