import  alert from '../../pom/alert'

describe('Validation of alert functionality', () => {
    const alt = new alert();

    beforeEach(() => {
        cy.visit('https://demoqa.com/alerts')
    });

    it('Validation of alert elements ', () => {
        alt.url();
        alt.buttonOne().click();
        cy.on('window:confirm', (message) => {
            expect(message).to.equal('Do you confirm action?')
       })
    });
});