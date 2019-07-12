/// <reference types="Cypress" />

export class AppAutomation {
    constructor() {}

    navigateTo() {
        cy.visit('https://www.kayak.com/');
    }

    getElemsWithAttribute(
            attr = '',
            attrType: string,
            selector: string ) 
    {
        return cy.get(`[${attr}${attrType}=${selector}`);
    }

    getTripTypeDisplayElem() {
        return cy.get('[id$=switch-display]')
            .first()
    }
    getOneWayDisplayElem() {
        return cy.get('[id$=switch-option-2]')
            .first()
    }
    getMultiCityDisplayElem() {
        return cy.get('[id$=switch-option-2]')
            .first()
    }
    getMultiCityVisibleSearchElems() {
        return cy.get('[id*=js-multiCityLeg]').not('.js-hiddenLeg');
    }
    getOriginDisplayElem() {
        return cy.get('[id$=origin-airport-display]').first();
    }
    getDestinationDisplayElem(){
        return cy.get(`[id$=destination-airport-display]`).first();
    }
    getDepartDateDisplayElem(){
        return cy.get('[id$=dateRangeInput-display-start]');
    }

    getDepartDateInputElem() {
        return cy.get('[id$=-dateRangeInput-start]')
            .first()
            .find('[id$=-depart-input]');
    }

    getReturnDateInputElem() {
        return cy.get('[id$=-dateRangeInput-end]')
            .first()
            .find('[id$=-return-input]')
    }


    getReturnDateDisplayElem(){
        return cy.get('[id$=dateRangeInput-display-end]')
    }

    getTravelerDialogTriggerElm() {
        return cy.get('[id$=travelersAboveForm-dialog-trigger]');
    }

    getTravlersAdultsInput() {
        return cy.get('[id$=travelersAboveForm-adults-input]')
    }

    getTravlersChildInput() {
        return cy.get('[id$=travelersAboveForm-child-input]')
    }

    getOriginInputElm() {
        return cy.get('[id$=origin-airport]').first();
    }

    getDestinationInputElm() {
        return cy.get('[id$=destination-airport]').first();
    }

    getElementIncrementInTravler(index: number) {
        return cy.get('[id$=-travelersAboveForm-dialog-inner]')
            .find(`div._ihp:nth-child(${index})`)
            .find('button[aria-label=Increment]')
    }

    getSuggesstions(searchStr: string, selector: string) {
        return cy.get(`[id$=${selector}]`)
            .find('li[data-short-name^='+searchStr+']');
    }

}





// export let square = () => Math.sqrt(4);

// function getOriginDisplayElem() {
//     return cy.get('[id$=origin-airport-display]');
// }

// function getDestinationDisplayElem() {
//     return cy.get('[id$=destination-airport-display]');
// }

// function getdateRangeDisplayStartElem() {
//     return cy.get('[id$=dateRangeInput-display-start]');
// }

// function getdateRangeDisplayEndElem () {
//     return cy.get('[id$=dateRangeInput-display-end]')
//         .should('be.visible');
// }

// export let getVisibleInputs = (tripType: any = 1) => {
//     let t = tripType === 1 ? 'be.visible' : 'not.be.visible';

//     cy.get('[id$=origin-airport-display]')
//             .should('be.visible')
//             .get('[id$=origin-airport-display]')
//             .should('be.visible')
//             .get('[id$="destination-airport-display"]')
//             .should('be.visible')
//             .get('[id$=dateRangeInput-display-start]')
//             .should(t);            
// }