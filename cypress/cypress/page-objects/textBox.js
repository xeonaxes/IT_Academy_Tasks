class TextBox {
    visit() {
      cy.visit('/text-box');
    }
  
    fillForm(user) {
      cy.get('#userName').type(user.fullName);
      cy.get('#userEmail').type(user.email);
      cy.get('#currentAddress').type(user.currentAddress);
      cy.get('#permanentAddress').type(user.permanentAddress);
    }
  
    submit() {
      cy.get('#submit').click();
    }
  
    checkOutput(user) {
      cy.get('#name').should('contain', user.fullName);
      cy.get('#email').should('contain', user.email);
      cy.get('p#currentAddress').should('contain', user.currentAddress);
      cy.get('p#permanentAddress').should('contain', user.permanentAddress);
    }
  }
  
  export default new TextBox();
  