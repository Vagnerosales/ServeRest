

describe('Cadastro com sucesso', () => {
  it('Cadastrar novo produto', () => {
    cy.postProduto({
      nome: Math.random().toString(36).substring(2,10) + 'teste gremio',
      preco: 100,
      descricao: 'Descrição do produto teste',
      quantidade: 10
    }).then((response) => {
      cy.log(response.body);
      expect(response.status).to.gte(200);
      expect(response.body).to.have.property('_id');
    })
  });
})

describe('Já existe produto com esse nome', () => {
  it('Já existe produto com esse nome', () => {
    cy.postProdutoExistente({
      nome: 'geladeira',
      preco: 100,
      descricao: 'Descrição do produto teste',
      quantidade: 10
    }).then((response) => {
      cy.log(response.body);
      expect(response.status).to.gte(400);
      expect(response.body.message).to.equal("Já existe produto com esse nome");
    })
  });
})


describe('Token ausente, inválido ou expirado', () => {  
  it('Token ausente, inválido ou expirado', () => {
    cy.request({
          method: 'POST',
          url:  'https://serverest.dev/produtos',
       body: {
          nome: 'user',
          email: 'user@qa.com.br',
          password: '123',
          administrador: 'true'
       },failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.gte(401);
      expect(response.body.message).to.equal("Token de acesso ausente, inválido, expirado ou usuário do token não existe mais");
    })
  })
})

describe('Testando uso da API', () => {
  it('Rota exclusiva para administradores', () => {
    cy.postProdutoUsuario({
      nome: Math.random().toString(36).substring(2,10) + 'teste gremio',
      preco: 100,
      descricao: 'Descrição do produto teste',
      quantidade: 10
    }).then((response) => {
      cy.log(response.body);
      expect(response.status).to.gte(403);
      expect(response.body.message).to.equal("Rota exclusiva para administradores");
    })
  });
})


