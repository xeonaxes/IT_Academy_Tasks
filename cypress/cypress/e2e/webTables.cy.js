import webTables from '../page-objects/webTables';

describe('Web Tables Tests', () => {
  const newUser = {
    firstName: 'Liza',
    lastName: 'Vlas',
    email: 'liza@vlas.com',
    age: '25',
    salary: '10000',
    department: 'QA'
  };

  beforeEach(() => {
    webTables.visit();
  });

  it('should add a new user', () => {
    webTables.addUser(newUser);
    webTables.search(newUser.email);
    webTables.verifyRowContains(newUser.firstName);
  });

  it('should search by last name', () => {
    webTables.search('Cierra');
    webTables.verifyRowContains('Cierra');
  });

  it('should delete a user', () => {
    webTables.deleteRow();
    cy.get('.rt-tbody').should('not.contain', 'Cierra');
  });

  it('should add a user and search by department', () => {
    webTables.addUser(newUser);
    webTables.search('QA');
    webTables.verifyRowContains(newUser.department);
  });
});
