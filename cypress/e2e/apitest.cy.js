
describe('API Test', () => {
    it('should return a list of users', () => {
      cy.api('https://jsonplaceholder.typicode.com/users')
        .should((response) => {
          expect(response.status).to.eq(200)
          expect(response.body).to.have.length(10)
          expect(response.body[0]).to.have.property('name', 'Leanne Graham')
        })
    })
  
    it('should return a specific user by id', () => {
      cy.api('https://jsonplaceholder.typicode.com/users/1')
        .should((response) => {
          expect(response.status).to.eq(200)
          expect(response.body).to.have.property('name', 'Leanne Graham')
          expect(response.body).to.have.property('email', 'Sincere@april.biz')
        })
    })
  
    it('should return a list of posts for a user', () => {
      cy.api('https://jsonplaceholder.typicode.com/posts?userId=1')
        .should((response) => {
          expect(response.status).to.eq(200)
          expect(response.body).to.have.length(10)
          expect(response.body[0]).to.have.property('title', 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit')
        })
    })
  })
  