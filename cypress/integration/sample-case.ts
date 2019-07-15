/// <reference types="Cypress" />

import {
    navigateTo,
    getOriginDisplayElem,
    getDestinationDisplayElem,
    getDepartDateDisplayElem,
    getReturnDateDisplayElem,
    getTripTypeDisplayElem,
    getOneWayDisplayElem,
    getMultiCityDisplayElem,
    getMultiCityVisibleSearchElems,
    getTravelerDialogTriggerElm,
    getTravlersAdultsInput,
} from '../../src/app';

describe('Kayak Automation Sample Test Suite', () => {
    before(() => {
        navigateTo();
    });

    it('should show all inputs in case of roundtrip', () => {
        getOriginDisplayElem()
            .should('be.visible');

        getDestinationDisplayElem()
            .should('be.visible');

        getDepartDateDisplayElem()
            .should('be.visible');

        getReturnDateDisplayElem()
            .should('be.visible');
    });

    it('should not visible return date element in case of oneway', () => {
        getTripTypeDisplayElem()
            .click();

        getOneWayDisplayElem()
            .click();

        getOriginDisplayElem()
            .should('be.visible');

        getDestinationDisplayElem()
            .should('be.visible');

        getDepartDateDisplayElem()
            .should('be.visible');

        getReturnDateDisplayElem()
            .should('not.be.visible');
    });

    it('should show three rows by default on page in case of multicity', () => {
        getTripTypeDisplayElem()
            .click();

        getMultiCityDisplayElem()
            .click();

        getMultiCityVisibleSearchElems()
            .not('.js-hiddenLeg')
            .should('have.length', 3);
    });

    it ('should not allow adults greater than eight', () => {
        getTravelerDialogTriggerElm()
            .click();
        getTravlersAdultsInput()
            .invoke('val')
            .then(($adults : Array<Element>) => {
                expect($adults).to.be.at.least(1);
                expect($adults).to.be.at.most(8);
            });
        Cypress.$('[id$=travelersAboveForm-dialog_content]').hide();

    });
});
