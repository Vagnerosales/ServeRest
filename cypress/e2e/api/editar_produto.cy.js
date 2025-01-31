
describe('Alterado com sucesso', () => {
  it('Registro alterado com sucesso', () => {
    cy.editarProduto({
      nome: Math.random().toString(36).substring(2,10) + 'teste gremio',
      preco: 100,
      descricao: 'Descrição do produto teste',
      quantidade: 10
    }).then((response) => {
      const userId  = response.body._id
      expect(response.status).to.gte(200);
      expect(response.body.message).to.equal("Registro alterado com sucesso");
    })
  });
})

describe('Já existe produto com esse nome', () => {
  it('Já existe produto com esse nome', () => {
    cy.editar({
      nome: Math.random().toString(36).substring(2,10) + 'teste gremio',
      preco: 100,
      descricao: 'Descrição do produto teste',
      quantidade: 10
    }).then((response) => {
      const userId  = response.body._id
      expect(response.status).to.gte(400);
      expect(response.body.message).to.equal("Já existe produto com esse nome");
    })
  });
})

describe('Token ausente, inválido ou expirado', () => {
  it('Token ausente, inválido ou expirado', () => {
    cy.editartokenAusente({
      nome: Math.random().toString(36).substring(2,10) + 'teste gremio',
      preco: 100,
      descricao: 'Descrição do produto teste',
      quantidade: 10
    }).then((response) => {
      cy.log(response.body);
      expect(response.status).to.gte(201);
      expect(response.body.message).to.equal("Token de acesso ausente, inválido, expirado ou usuário do token não existe mais");
    })
  });
})

describe('Testando uso da API', () => {
  it('Rota exclusiva para administradores', () => {
    cy.editarProdutoUsuario({
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


