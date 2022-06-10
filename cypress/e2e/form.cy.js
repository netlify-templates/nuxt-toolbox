describe('Testing form', () => {

  const name = 'Testing'
  const email = 'testing@testing.com'
  const feedback = 'Testing form using Cypress'

  beforeEach(() => {
    cy.visit('/')
  })

  it('check for validation message for invalid email input', () => {
    cy.get('[type="email"]').type('not_an_email')
    cy.get('[type="submit"]').click()
    cy.get('[type="email"]').then(($input) => {
      expect($input[0].validationMessage).to.eq('Please include an \'@\' in the email address. \'not_an_email\' is missing an \'@\'.')
    })
  })

  it('check for validation message for no email input', () => {
    cy.get('[type="submit"]').click()
    cy.get('[type="email"]').then(($input) => {
      expect($input[0].validationMessage).to.eq('Please fill out this field.')
    })
  })

  it('check for validation message with email and no feedback', () => {
    cy.get('[type="email"]').type(email)
    cy.get('[type="submit"]').click()
    cy.get('#feedback').then(($input) => {
      expect($input[0].validationMessage).to.eq('Please fill out this field.')
    })
  })

  it('submitting feedback should redirect to /success', () => {
    cy.get('#name').type(name)
    cy.get('[type="email"]').type(email)
    cy.get('#feedback').type(feedback)
    cy.get('[type="submit"]').click()
   
    cy.url().should('include', '/success')

  })
})