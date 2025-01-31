

describe('Testando uso da API', () => {
  it('Cadastrar novo usuario', () => {
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
      expect(response.status).to.gte(200);
      expect(response.body.message).to.equal("Cadastro realizado com sucesso");
    })
  })
})

describe('Testando uso da API', () => {
    it('Cadastrar usuario como email existente', () => {
      cy.request({
           method: 'POST',
           url:  'https://serverest.dev/usuarios',
             body: {
              nome: 'vaninho',
              email: 'vaninho1@gmail.com',
              password: '123',
              administrador: 'true'
        },failOnStatusCode: false
      }).then((response) => {
        cy.log(response.body);
        expect(response.status).to.gte(200);
        expect(response.body.message).to.equal("Este email já está sendo usado");
      })
    })
  })