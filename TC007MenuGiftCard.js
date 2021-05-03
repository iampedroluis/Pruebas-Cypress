describe('Menu Gift Cards', function(){
    it('TC-Amazon-Menu GiftCards', function(){
        cy.visit('https://www.amazon.com/?&tag=googleglobalp-20&ref=pd_sl_7nnedyywlk_e&adgrpid=82342659060&hvpone=&hvptwo=&hvadid=393490861840&hvpos=&hvnetw=g&hvrand=17584977951769112894&hvqmt=e&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9041037&hvtargid=kwd-10573980&hydadcr=2246_11095898&gclid=EAIaIQobChMI59aFtu2r8AIVioiRCh3k3QFBEAAYASAAEgIosvD_BwE');
        cy.get('[href="/gift-cards/b/?ie=UTF8&node=2238192011&ref_=nav_cs_gc_4fb606b1a14b44e4823e00c03fc71f47"]').click();
        cy.get('.bxw-pageheader__title__text > h1').contains('Tarjetas de Regalo');
        
    });
});