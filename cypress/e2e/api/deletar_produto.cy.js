
describe('Registro excluído com sucesso', () => {
  it('Registro excluído com sucesso', () => {
    cy.deletarProduto({
      nome: Math.random().toString(36).substring(2,10) + 'teste gremio',
      preco: 100,
      descricao: 'Descrição do produto teste',
      quantidade: 10
    }).then((response) => {
      const userId  = response.body._id
      expect(response.status).to.gte(200);
      expect(response.body.message).to.equal("Registro excluído com sucesso");
    })
  });
})


describe('Token ausente, inválido ou expirado', () => {
  it('Token ausente, inválido ou expirado', () => {
    cy.deletarProdutoToken({
      nome: Math.random().toString(36).substring(2,10) + 'teste gremio',
      preco: 100,
      descricao: 'Descrição do produto teste',
      quantidade: 10
    }).then((response) => {
      const userId  = response.body._id
      expect(response.status).to.gte(200);
      expect(response.body.message).to.equal("Token de acesso ausente, inválido, expirado ou usuário do token não existe mais");
    })
  });
})

describe('Rota exclusiva para administradores', () => {
  it('Rota exclusiva para administradores', () => {
    cy.deletarProdutoUsuario({
      nome: Math.random().toString(36).substring(2,10) + 'teste gremio',
      preco: 100,
      descricao: 'Descrição do produto teste',
      quantidade: 10
    }).then((response) => {
      const userId  = response.body._id
      expect(response.status).to.gte(200);
      expect(response.body.message).to.equal("Rota exclusiva para administradores");
    })
  });
})
