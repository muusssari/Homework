// https://docs.cypress.io/api/introduction/api.html

describe('My First Test', () => {
  it('visits the app root url', () => {
    cy.visit('/')
    cy.contains('h1', 'Notes')
  })

  it('open and close add note modal', () => {
    cy.get('.footerButton').click()
    cy.get('html').click(15, 40);

  })

  it('add new notes', () => {
    cy.get('.cardContainer').find('p.number').first().contains('p', '3')
    cy.get('.footerButton').click();
    cy.get('form').find('input').click().type("This is title");
    cy.get('form').find('textarea').click().type("This is content");
    cy.get('.ant-form-item-control-input-content').find('button').first().click()
    cy.get('tbody').children().should('have.length', 4);
    cy.get('.cardContainer').find('p.number').first().contains('p', '4')
  })

  it('delete note', () => {
    cy.get('tbody').find('input').its('length').then(elementsCount => {
      let selected = Cypress._.random(elementsCount - 1);
      cy.get('tbody').find('input').eq(selected).click();
      cy.get('.alertButtons').last().click();
      cy.get('.cardContainer').find('p.number').first().contains('p', '3')
    })
  })
})
