describe('Test QA Code Quiz', function() {
    it('Visit QA Code Quiz', function() {
        cy.visit('http://localhost:8080')
        cy.wait(2000)
        cy.get('div[class="sc-bdVaJa cCkHTg"]').contains('qa.code-quiz.dev');
        cy.get('input[class="sc-EHOje ewVUdC"]').eq(0).type('dummytree')
        cy.get('input[class="sc-EHOje ewVUdC"]').eq(1).type('test1')
        cy.get('button[class="sc-bZQynM cGmBje"]').click()
        cy.wait(2000)
        cy.get('div[class="sc-bdVaJa cCkHTg"]').contains('Hello undefined')
        cy.get('button[class="sc-bxivhb fqCnAP"]').click()
    })
})