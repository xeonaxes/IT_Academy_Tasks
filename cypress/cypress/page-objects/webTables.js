class WebTables {
    visit() {
      cy.visit('/webtables');
    }
  
    addUser(user) {
      cy.get('#addNewRecordButton').click();
      cy.get('#firstName').type(user.firstName);
      cy.get('#lastName').type(user.lastName);
      cy.get('#userEmail').type(user.email);
      cy.get('#age').type(user.age);
      cy.get('#salary').type(user.salary);
      cy.get('#department').type(user.department);
      cy.get('#submit').click();
    }
  
    search(value) {
      cy.get('#searchBox').clear().type(value);
    }
  
    verifyRowContains(value) {
      cy.get('.rt-tbody').should('contain', value);
    }
  
    deleteRow() {
      cy.get('[title="Delete"]').first().click();
    }
  }
  
  export default new WebTables();
  