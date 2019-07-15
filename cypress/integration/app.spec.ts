/// <reference types="Cypress" />

import {
    navigateTo,
    getOriginDisplayElem,
    getOriginInputElm,
    wait,
    getSuggesstions,
    getDestinationDisplayElem,
    getDestinationInputElm,
    getTravelerDialogTriggerElm,
    getElementIncrementInTravler,
    getTravlersAdultsInput,
    getTravlersChildInput,
    getDepartDateDisplayElem,
    getDepartDateInputElem,
    getReturnDateInputElem,
 } from '../../src/app';

const searchableData : any = {
    originInput: 'kara',
    originSelection: 'Karachi',
    destinationInput: 'Lah',
    destinationSelection: 'Lahore',
};

describe('Automation Flow Test Suite', () => {
    before(() => {
        navigateTo();
        // cy.fixture('data.json').as('searchableData');
    });

    it('should click origin input place some data in here that search and select appropriate value', () => {
        getOriginDisplayElem().click();
        getOriginInputElm()
            .type(`{selectall}{backspace} ${searchableData.originInput}`);

        wait(1000);

        getSuggesstions(searchableData.originSelection, 'origin-airport-smartbox-dropdown')
            .should('contain.text', searchableData.originSelection) // assertion
            .click();

    });

    it('should click destination input place some data in here that search and select appropriate value', () => {
        getDestinationDisplayElem().click();
        getDestinationInputElm()
            .type(`{selectall}{backspace} ${searchableData.destinationInput}`);

        wait(1000);

        getSuggesstions(searchableData.destinationSelection, 'destination-airport-smartbox-dropdown')
            .should('contain.text', searchableData.destinationSelection) // assertion
            .click();
    });

    it('should open passengers menu and select adults and childs', () => {
        getTravelerDialogTriggerElm().click();
        getElementIncrementInTravler(1).click().click();
        getElementIncrementInTravler(4).click();
        getTravlersAdultsInput().should('contain.value', 3);
        getTravlersChildInput().should('contain.value', 1);

        cy.get('.title').first().click();
    });

    it ('should select date in startDate field provided in file', () => {
        getDepartDateDisplayElem().click();
        getDepartDateInputElem().type('{selectall}{backspace}07/15/2019');
        getReturnDateInputElem().type('{selectall}{backspace}07/18/2019{enter}');
        getDepartDateInputElem().should('contain.text', 'Mon 7/15');
        getReturnDateInputElem().should('contain.text', 'Thu 7/18');
    })

    it ('should go to the result page', () => {
        cy.get('.search-form-inner')
            .find('button[type=submit]')
            .click();
        cy.location('href')
            .should('contain', '/flights');
    });
});
