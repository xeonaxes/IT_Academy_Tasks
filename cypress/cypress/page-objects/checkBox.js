class CheckBox {
    visit() {
      cy.visit('/checkbox');
    }
  
    expandAll() {
      cy.get('.rct-option-expand-all').click();
    }
  
    checkNotes() {
      cy.contains('label', 'Notes').click();
    }
  
    checkCommands() {
      cy.contains('label', 'Commands').click();
    }
  
    verifyCheckedItems(items) {
      items.forEach(item => {
        cy.get('#result').should('contain', item);
      });
    }
  }
  
  export default new CheckBox();
  