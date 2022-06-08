import {topBarMenuBlock} from "../../constants/selectors/selectors";
import {User} from "../../constants/texts/texts";

describe("Test cases for TopBarMenu", () => {

    beforeEach(() => {
        cy.visit("https://shaurman.com.ua/")
    })

    it('Verify navigating to \'O нас\' from Home page ', function () {
        cy.get(topBarMenuBlock.aboutUsLink).click()
        cy.url()
            .should('contain', '/about_us')
    })

    it('Verify navigating to \'Доставка и оплата\' from Home page ', function () {
        cy.get(topBarMenuBlock.deliveryAndPaymentLink).click()
        cy.url()
            .should('contain', '/delivery')
    });

    it('Verify navigating to \'Новости\' from Home page ', function () {
        cy.get(topBarMenuBlock.newsLink).click()
        cy.url()
            .should('contain', '/blog')
    });

    it('Verify displaying the \'Shopping Cart\' icon', function () {
        cy.get(topBarMenuBlock.shoppingCartButton).should("be.visible")
    });

    it('Verify displaying the drop-down menu with telephone numbers', function (){
        cy.get(topBarMenuBlock.phoneDropDown).trigger("mouseover")
            .should("be.visible", topBarMenuBlock.activeDropDown)
    });

    it('Verify button \'Заказать звонок\'', function (){
        cy.get(topBarMenuBlock.orderCallButton).click()
        cy.get(topBarMenuBlock.orderCallModalWindow)
            .should("be.visible", topBarMenuBlock.orderCallModalWindow)
    })

    it('Verify \'Заказать звонок\' form with empty  required fields in  ', function () {
        cy.get(topBarMenuBlock.orderCallButton).click()
        cy.get(topBarMenuBlock.orderCallModalWindow)
        cy.get(topBarMenuBlock.orderCallFormNameField).type(User.Name)
        cy.get(topBarMenuBlock.orderButton).click()
    });

})