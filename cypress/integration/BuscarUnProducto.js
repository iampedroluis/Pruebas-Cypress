describe('Home - Buscar Productos', function(){
    it('Home-Amazon- Buscar Productos', function(){
        cy.visit('https://www.amazon.com/?&tag=googleglobalp-20&ref=pd_sl_7nnedyywlk_e&adgrpid=82342659060&hvpone=&hvptwo=&hvadid=393490861840&hvpos=&hvnetw=g&hvrand=17584977951769112894&hvqmt=e&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9041037&hvtargid=kwd-10573980&hydadcr=2246_11095898&gclid=EAIaIQobChMI59aFtu2r8AIVioiRCh3k3QFBEAAYASAAEgIosvD_BwE');
        cy.get('#twotabsearchtextbox').type('martillo');
        cy.get('#nav-search-submit-button').click();
        cy.get('.a-color-state').contains('martillo');
    });
});