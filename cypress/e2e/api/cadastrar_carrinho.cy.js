
  //Produto não encontrado
  describe('Produto não encontrado', () => {
    it('Produto não encontrado', () => {
      cy.postProdutocarrinho({
      
      }).then((response) => {
        cy.log(response.body);
       expect(response.body.message).to.equal("Produto não encontrado");
       
      })
    });
  })
  
/*

// Não é permitido ter mais de um carrinho
describe('Não é permitido ter mais de 1 carrinho', () => {
  it('Não é permitido ter mais de 1 carrinho', () => {
    cy.carrinhoCadastrado({
     
    }).then((response) => {
      cy.log(response.body);
      expect(response.status).to.gte(200);
      expect(response.body.message).to.equal("Não é permitido ter mais de 1 carrinho");
    })
  });
})

*/

describe('Token ausente, inválido ou expirado', () => {  
  it('Token ausente, inválido ou expirado', () => {
    cy.request({
          method: 'POST',
          url:  'https://serverest.dev/carrinhos',
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


// Cadastrar produto, cadastrar no carrinho e deletar
describe('Cadastro realizado com sucesso', () => {
  it('Cadastro realizado com sucesso', () => {

    cy.postProdutoDiretoCarrinho({
      nome: Math.random().toString(36).substring(2,10) + 'teste gremio',
      preco: 100,
      descricao: 'Descrição do produto teste',
      quantidade: 10
     
    }).then((response) => {
      cy.log(response.body);
      expect(response.status).to.gte(200);
      expect(response.body.message).to.equal("Cadastro realizado com sucesso");
    })
    cy.concluirProdutocarrinho({

    })
  });
})
