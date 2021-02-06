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
    it('Click Go to game start', () => {
        cy.get('.game-info').children('ol').children('li').eq(0).should('have.text', 'Go to game start');
        cy.get('.game-info').children('ol').children('li').eq(0).click();
        cy.get('.square').eq(0).click();
        cy.get('.square').eq(1).click();
        cy.get('.square').eq(3).click();
        cy.get('.square').eq(4).click();
        cy.get('.square').eq(7).click();
        cy.get('.square').eq(6).click();
        cy.get('.square').eq(2).click();
        cy.get('.square').eq(5).click();
        cy.get('.square').eq(8).click();
        cy.get('.status').should('have.text', 'DRAW !!');
        cy.get
    });
});