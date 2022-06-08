import {HomePage} from "../../constants/selectors/selectors";

describe("Test cases for Home page", function (){
    beforeEach(() => {
        cy.visit("https://shaurman.com.ua/")
    })

    it('Verify displaying header', function () {
        expect(HomePage.header).to.exist
    });

    it('Verify displaying top-bar menu', function () {
        expect(HomePage.topBarMenu).to.exist
    });

    it('Verify displaying sidebar', function () {
        expect(HomePage.sidebar).to.exist
    });

    it('Verify displaying slider', function () {
        expect(HomePage.slider).to.exist
    });

    it('Verify displaying main content block', function () {
        expect(HomePage.mainContent).to.exist
    });

    it('Verify displaying footer', function () {
        expect(HomePage.footer).to.exist
    });
})