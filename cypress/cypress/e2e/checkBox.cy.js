import checkBox from '../page-objects/checkBox';

describe('Check Box Tests', () => {
  beforeEach(() => {
    checkBox.visit();
    checkBox.expandAll();
  });

  it('should check Notes and verify the result', () => {
    checkBox.checkNotes();
    checkBox.verifyCheckedItems(['notes']);
  });

  it('should check Commands and verify the result', () => {
    checkBox.checkCommands();
    checkBox.verifyCheckedItems(['commands']);
  });

  it('should check multiple items and verify results', () => {
    checkBox.checkNotes();
    checkBox.checkCommands();
    checkBox.verifyCheckedItems(['notes', 'commands']);
  });
});
