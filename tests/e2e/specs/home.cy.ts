// https://docs.cypress.io/api/table-of-contents

describe('Test columns', () => {
  
  it('Visit route / and verify default columns exists', () => {
    cy.visit(Cypress.env('APP_BASE_URL'))
    cy.contains('h2', 'BackLog')
    cy.contains('h2', 'To Do')
    cy.contains('h2', 'Doing')
    cy.contains('h2', 'Done')
  })

  it('Visit route / and test drag and drop column', () => {
    cy.visit(Cypress.env('APP_BASE_URL'))
    cy.get('.handle-column-drag').eq(0).drag('.handle-column-drag:last')
  })
  
  it('Visit route / and test drag and drop items inside column', () => {
    cy.visit(Cypress.env('APP_BASE_URL'))
    cy.get('.handle-drag-item').eq(8).drag('.handle-drag-item:first', { target: { x: 20, y: 10 } })
  })

})
