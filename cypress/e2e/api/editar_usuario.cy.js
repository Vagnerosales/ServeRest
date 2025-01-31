
describe('Testando uso da API', () => {
  it('Registro alterado com sucesso', () => {
    cy.request({
          method: 'POST',
          url:  'https://serverest.dev/usuarios',
       body: {
          nome: 'vaninho',
          email: Math.random().toString(36).substring(2,10) + '@gmail.com',
          password: '123',
          administrador: 'true'
       },
    }).then((response) => {
      const userId  = response.body._id
    cy.request({
        method: 'PUT',
         url:  'https://serverest.dev/usuarios/'+ userId,
         body: {
            nome: 'lucas',
            email: Math.random().toString(36).substring(2,10) + '@gmail.com',
            password: '123',
            administrador: 'true'
       },
         failOnStatusCode: false
      }).then((response) => {
        cy.log(response.body);
        expect(response.status).to.gte(200);
        expect(response.body.message).to.equal("Registro alterado com sucesso");
       
      })
    })
  })
})

describe('Testando uso da API', () => {
  it('Este email já está sendo usado', () => {
    cy.request({
          method: 'POST',
          url:  'https://serverest.dev/usuarios',
       body: {
          nome: 'vaninho',
          email: Math.random().toString(4).substring(2) + '@gmail.com',
          password: '123',
          administrador: 'true'
       },
    }).then((response) => {
      const userId  = response.body._id
    cy.request({
        method: 'PUT',
         url:  'https://serverest.dev/usuarios/'+ userId,
         body: {
            nome: 'Peter',
            email: 'vaninho1@gmail.com',
            password: '123',
            administrador: 'true'
       },
         failOnStatusCode: false
      }).then((response) => {
        cy.log(response.body);
        expect(response.status).to.gte(200);
        expect(response.body.message).to.equal("Este email já está sendo usado");
       
      })
    })
  })
})