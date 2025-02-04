 // Registro excluído com sucesso
 describe('Registro excluído com sucesso', () => {
  it('Registro excluído com sucesso', () => {

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

    }).then((response) => {
      cy.log(response.body);
      expect(response.status).to.gte(200);
      expect(response.body.message).to.equal("Registro excluído com sucesso");
    });
  })
})
 
  // teste  teste teste 
  describe('Deletar produto ', () => {  
    it('deletar', () => {
      cy.concluirProdutocarrinho({
            method: 'DELETE',
            url:  'https://serverest.dev/carrinhos/concluir-compras',
         
          }).then((response) => {
            expect(response.status).to.gte(200);
            expect(response.body.message).to.equal("Não foi encontrado carrinho para esse usuário");
        })
      })
    })
    
