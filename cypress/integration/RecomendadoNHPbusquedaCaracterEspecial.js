describe('Recomendado Busqueda Caracter Especial', function(){
    it('TCRE-Amazon-Search-Caracter Especial', function(){
        cy.visit('https://www.amazon.com/?&tag=googleglobalp-20&ref=pd_sl_7nnedyywlk_e&adgrpid=82342659060&hvpone=&hvptwo=&hvadid=393490861840&hvpos=&hvnetw=g&hvrand=17584977951769112894&hvqmt=e&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9041037&hvtargid=kwd-10573980&hydadcr=2246_11095898&gclid=EAIaIQobChMI59aFtu2r8AIVioiRCh3k3QFBEAAYASAAEgIosvD_BwE');
        cy.get('#twotabsearchtextbox').type('**$%');
        cy.get('#nav-search-submit-button').click();
        cy.get('[tabindex="0"] > :nth-child(1) > :nth-child(2)').contains('**$%');
    });
});
