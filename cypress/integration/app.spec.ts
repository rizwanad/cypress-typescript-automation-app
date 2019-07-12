/// <reference types="Cypress" />

import { AppAutomation } from '../../src/app';

let App = new AppAutomation();

const searchableData: any = {
    "originInput": "kara",
    "originSelection": "Karachi",
    "destinationInput": "Lah",
    "destinationSelection": "Lahore",
};

describe('Automation app flow', () => {    
    before(() => {
        App.navigateTo();
    })
    
    it('should click origin input place some data in here that search and select appropriate value', () => {
        //cy.fixture('data.json').as('searchableData').then((searchableData) => {
            App.getOriginDisplayElem().click();
            App.getOriginInputElm()
                .type('{selectall}{backspace} '+ searchableData.originInput);
            
            cy.wait(1000);
            
            App.getSuggesstions(searchableData.originSelection, 'origin-airport-smartbox-dropdown')
                .should('contain.text', searchableData.originSelection) // assertion
                .click();
        //})
        
    });

    it('should click destination input place some data in here that search and select appropriate value', () => {
        App.getDestinationDisplayElem().click();
        App.getDestinationInputElm()
            .type('{selectall}{backspace}'+searchableData.destinationInput);

        cy.wait(1000);
        
        App.getSuggesstions(searchableData.destinationSelection, 'destination-airport-smartbox-dropdown')
            .should('contain.text', searchableData.destinationSelection) // assertion
            .click();
    });

    it('should open passengers menu and select adults and childs', () => {
        App.getTravelerDialogTriggerElm().click();
        App.getElementIncrementInTravler(1).click().click();
        App.getElementIncrementInTravler(4).click();
        App.getTravlersAdultsInput().should('contain.value', 3);
        App.getTravlersChildInput().should('contain.value', 1);

        cy.get('.title').first().click();

        // Cypress.$('[id$=travelersAboveForm-dialog_content]').hide();
    });

    it ('should select date in startDate field provided in file', () => {
        App.getDepartDateDisplayElem().click();
        App.getDepartDateInputElem().type('{selectall}{backspace}07/15/2019');
        App.getReturnDateInputElem().type('{selectall}{backspace}07/18/2019{enter}');
        App.getDepartDateInputElem().should('contain.text', 'Mon 7/15');
        App.getReturnDateInputElem().should('contain.text', 'Thu 7/18');
    })

    it ('should go to the result page', () => {
        cy.get('.search-form-inner')
            .find('button[type=submit]')
            .click();
        
        cy.location('href')
            .should('contain', '/flights');
    })
});