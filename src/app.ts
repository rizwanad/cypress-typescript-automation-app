/// <reference types="Cypress" />

export const navigateTo = () : Cypress.Chainable => cy.visit('https://www.kayak.com');
export const wait = (milliseconds : number) : Cypress.Chainable => cy.wait(milliseconds);
export const getOriginDisplayElem = () : Cypress.Chainable => cy.get('[id$=origin-airport-display]').first();
export const getDestinationDisplayElem = () : Cypress.Chainable => cy.get(`[id$=destination-airport-display]`).first();
export const getTripTypeDisplayElem = () : Cypress.Chainable => cy.get('[id$=switch-display]').first();
export const getOneWayDisplayElem = () : Cypress.Chainable => cy.get('[id$=switch-option-2]').first();
export const getMultiCityDisplayElem = () : Cypress.Chainable => cy.get('[id$=switch-option-2]').first();
export const getMultiCityVisibleSearchElems = () : Cypress.Chainable => cy.get('[id*=js-multiCityLeg]');
export const getDepartDateDisplayElem = () : Cypress.Chainable => cy.get('[id$=dateRangeInput-display-start]');
export const getDepartDateInputElem = () : Cypress.Chainable => {
    return cy.get('[id$=-dateRangeInput-start]')
        .first()
        .find('[id$=-depart-input]');
};
export const getReturnDateDisplayElem = () : Cypress.Chainable => cy.get('[id$=dateRangeInput-display-end]');
export const getReturnDateInputElem = () : Cypress.Chainable => {
    return cy.get('[id$=-dateRangeInput-end]')
        .first()
        .find('[id$=-return-input]');
};
export const getTravelerDialogTriggerElm = () : Cypress.Chainable => cy.get('[id$=travelersAboveForm-dialog-trigger]');
export const getTravlersAdultsInput = () : Cypress.Chainable => cy.get('[id$=travelersAboveForm-adults-input]');
export const getTravlersChildInput = () : Cypress.Chainable => cy.get('[id$=travelersAboveForm-child-input]');
export const getOriginInputElm = () : Cypress.Chainable => cy.get('[id$=origin-airport]').first();
export const getDestinationInputElm = () : Cypress.Chainable => cy.get('[id$=destination-airport]').first();

export const getElementIncrementInTravler = (index : number) : Cypress.Chainable => {
    return cy.get('[id$=-travelersAboveForm-dialog-inner]')
        .find(`div._ihp:nth-child(${index})`)
        .find('button[aria-label=Increment]');
};

export const getSuggesstions = (searchStr : string, selector : string) : Cypress.Chainable => {
    return cy.get(`[id$=${selector}]`)
        .find(`li[data-short-name^=${searchStr}]`);
};
