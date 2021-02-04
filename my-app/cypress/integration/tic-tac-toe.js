describe('Test tic-tac-toe', () => {
    it('Successfully loads', () => {
        cy.visit('/');
    });
    it('Number of square', () => {
        cy.get('.square').should(($square) => {
            expect($square).to.have.length(9);
        });
    });
    it('Click square until win', () => {
        cy.get('.status').should('not.have.text');
        cy.get('.square').eq(1).click();
        cy.get('.square').eq(0).click();
        cy.get('.square').eq(4).click();
        cy.get('.square').eq(3).click();
        cy.get('.square').eq(7).click();
        cy.get('.square').eq(6).click();
    });
    it('Check the Winner', () => {
        cy.get('.status').should('have.text', 'Winner: X');
    });
});