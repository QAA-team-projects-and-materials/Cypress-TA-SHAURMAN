import selectors from "../../support/selectors";

describe("Test cases for Home page", function (){
    beforeEach(() => {
        cy.visit("https://shaurman.com.ua/")
    })

    it('Verify displaying header', function () {
        expect('HEADER').to.exist
    });

    it('Verify displaying top-bar menu', function () {
        expect('TOP_BAR_MENU').to.exist
    });

    it('Verify displaying sidebar', function () {
        expect('SIDEBAR').to.exist
    });

    it('Verify displaying slider', function () {
        expect('SLIDER').to.exist
    });

    it('Verify displaying main content block', function () {
        expect('MAIN_CONTENT').to.exist
    });

    it('Verify displaying footer', function () {
        expect('FOOTER').to.exist
    });

})