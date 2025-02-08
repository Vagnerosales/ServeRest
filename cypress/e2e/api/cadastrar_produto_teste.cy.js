describe('Cadastro com sucesso', () => {
  it('Cadastrar novo produto', () => {
    Cypress.Commands.add('getToken', (email, password) => {
      return cy.request({
        method: 'POST',
        url: 'https://serverest.dev/login',
        body: {
          email: email,
          password: password
        }
      })
      .then((response) => {
        const token = response.body.authorization;
        return token 
      })
    })
      cy.getToken('admin@gmail.com', '123').then((token) => {
        return cy.request({
          method: 'POST',
          url: 'https://serverest.dev/produtos',
          headers: {
            "Authorization": token,
            "Content-Type": "application/json"
          },
          body:{
            nome: Math.random().toString(36).substring(2,10) + 'teste gremio',
            preco: 100,
            descricao: 'Descrição do produto teste',
            quantidade: 10
          }
        }).then((response) => {
          cy.log(response.body);
          expect(response.status).to.gte(200);
          expect(response.body).to.have.property('_id');
        })
      })
    })
})