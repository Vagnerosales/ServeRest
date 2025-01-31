
describe('Testando uso da API', () => {
  it('Registro excluído com sucesso', () => {
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
        method: 'DELETE',
         url:  'https://serverest.dev/usuarios/'+ userId,
         failOnStatusCode: false
      }).then((response) => {
        cy.log(response.body);
        expect(response.status).to.gte(200);
        expect(response.body.message).to.equal("Registro excluído com sucesso");
       
      })
      cy.request({
        method: 'GET',
         url:  'https://serverest.dev/usuarios/' + userId,
         failOnStatusCode: false
      }).then((response) => {
        expect(response.status).to.gte(200);
        expect(response.body.message).to.equal("Usuário não encontrado");
      })
    })
  })
})


describe('Testando uso da API', () => {
  it('Nenhum registro excluído', () => {
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
        method: 'DELETE',
         url:  'https://serverest.dev/usuarios/'+ 'TyExPPiXLyzNYrH6userId',
         failOnStatusCode: false
      }).then((response) => {
        cy.log(response.body);
        expect(response.status).to.gte(200);
        expect(response.body.message).to.equal("Nenhum registro excluído");
       
      })
    })
  })
})



