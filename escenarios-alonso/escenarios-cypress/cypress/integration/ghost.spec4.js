describe('Testing Ghost App Registration', () => {
    beforeEach(()=>{
       cy.visit('http://localhost:2369/ghost/#/setup/one')
        cy.wait(7000)
        cy.visit('http://localhost:2369/ghost/#/setup/two')
    })
    it('Create a user with invalida password', ()=>{
        cy.get('form').within(() => {
            cy.get('input[id="blog-title"]').type('Ghost Blog')
            cy.get('input[id="name"]').type('Alonso Cantu')
            cy.get('input[id="email"]').type('a.cantu@uniandes.edu.co')
            cy.get('input[id="password"]').type('MISO4')
            cy.get('button[id="ember29"]').click()
        })
        cy.wait(1000)
    })
  })

