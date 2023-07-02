/// <reference types="cypress" />

describe('Home page', () => {
  
  it('my test', () => {
    cy.visit('/');
    cy.get('nav').find('[title="Contact us"]').click();
    cy.get('#id_contact').select('Customer service');
    cy.get('#email').type("my_test_mail00322@dfds.com");
    cy.get('#id_order').type('123242');
    cy.get('#uniform-fileUpload').selectFile('img.jpg')

  });
});