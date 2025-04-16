import textBox from '../page-objects/textBox';

describe('Text Box Tests', () => {
  beforeEach(() => {
    cy.fixture('users').then((data) => {
      cy.wrap(data.user1).as('user');
    });
  });

  it('Should fill and submit the form correctly', function () {
    textBox.visit();
    textBox.fillForm(this.user);
    textBox.submit();
    textBox.checkOutput(this.user);
  });

  it('Should validate incorrect email', () => {
    textBox.visit();
    cy.get('#userEmail').type('invalid-email');
    textBox.submit();
    cy.get('#userEmail').should('have.class', 'field-error'); 
  });

  it('Should not submit if required fields are empty', () => {
    textBox.visit();
    textBox.submit();
    cy.get('#name').should('not.exist');
  });
});

