/// <reference types="Cypress" />

import { AppAutomation } from '../../src/app';

let App = new AppAutomation();

describe('Kayak Automation app', () => {
    before(() => {
        App.navigateTo();
    })

    it('should show all inputs in case of roundtrip', () => {
        App.getOriginDisplayElem().should('be.visible');
        App.getDestinationDisplayElem().should('be.visible');
        App.getDepartDateDisplayElem().should('be.visible');
        App.getReturnDateDisplayElem().should('be.visible');
    })

    it('should not visible return date element in case of oneway', () => { 
        App.getTripTypeDisplayElem().click();
        App.getOneWayDisplayElem().click()    
        
        App.getOriginDisplayElem().should('be.visible');
        App.getDestinationDisplayElem().should('be.visible');
        App.getDepartDateDisplayElem().should('be.visible');
        App.getReturnDateDisplayElem().should('not.be.visible');
    });

    it('should show three rows by default on page in case of multicity', () => {
        App.getTripTypeDisplayElem().click();
        App.getMultiCityDisplayElem().click();
        
        App.getMultiCityVisibleSearchElems()
            .should('have.length', 3);
    })

    it ('should not allow adults greater than eight', () => {
        App.getTravelerDialogTriggerElm().click();
        App.getTravlersAdultsInput()
            .invoke('val')
            .then(($adults) => {
                expect($adults).to.be.at.least(1);
                expect($adults).to.be.at.most(8);
            });
        Cypress.$('[id$=travelersAboveForm-dialog_content]').hide();

    })
})
