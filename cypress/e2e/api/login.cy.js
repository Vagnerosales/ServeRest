

describe('fazendo login', () => {
  it('login', () => {
    cy.request({
      method: 'POST',
       url:  'https://serverest.dev/login/',
       body:{
        "email": "admin@gmail.com",
        "password": "123"
       },
    }).then((response) => {
      cy.log(response.body);
      expect(response.status).to.gte(200);
      expect(response.body.message).to.equal("Login realizado com sucesso");
    });
  })
})

describe('login' , () => {
  it('login', () => {
    cy.request({
      method: 'POST',
       url:  'https://serverest.dev/login/',
       body:{
        "email": "admin@gmail.com",
        "password": "1234111"
       },
       failOnStatusCode: false
    }).then((response) => {
      cy.log(response.body);
      expect(response.status).to.gte(200);
      expect(response.body.message).to.equal("Email e/ou senha inválidos");
    });
  })
})