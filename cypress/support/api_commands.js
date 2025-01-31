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

// Cadastrar Produto admin
Cypress.Commands.add('postProduto', (data) => {
  cy.getToken('admin@gmail.com', '123').then((token) => {
    return cy.request({
      method: 'POST',
      url: 'https://serverest.dev/produtos',
      headers: {
        "Authorization": token,
        "Content-Type": "application/json"
      },
      body: data,
    }).then((response) => {
      const userId  = response.body._id
    })
  })
})

// Cadastrar Produto admin já existente
Cypress.Commands.add('postProdutoExistente', (data) => {
  cy.getToken('admin@gmail.com', '123').then((token) => {
    return cy.request({
      method: 'POST',
      url: 'https://serverest.dev/produtos',
      headers: {
        "Authorization": token,
        "Content-Type": "application/json"
      },
      body: data
      ,failOnStatusCode: false
    }).then((response) => {
      const userId  = response.body._id
    })
  })
})

// Cadastrar Produto usuario
Cypress.Commands.add('postProdutoUsuario', (data) => {
  cy.getToken('vagnerosales@gmail.com', '123').then((token) => {
    return cy.request({
      method: 'POST',
      url: 'https://serverest.dev/produtos',
      headers: {
        "Authorization": token,
        "Content-Type": "application/json"
      },failOnStatusCode: false
    }).then((response) => {
      const userId  = response.body._id
    })
  })
})


//deletar produto
Cypress.Commands.add('deletarProduto', (data) => {
  cy.getToken('admin@gmail.com', '123').then((token) => {
    return cy.request({
      method: 'POST',
      url: 'https://serverest.dev/produtos',
      headers: {
        "Authorization": token,
        "Content-Type": "application/json"
      },
      body: data
    }).then((response) => {
      const userId  = response.body._id
      cy.request({
        method: 'DELETE',
        url: 'https://serverest.dev/produtos/' + userId,
        headers: {
          "Authorization": token,
          "Content-Type": "application/json"
        },
      })
    })
  })
})


//deletar produto Token ausente
Cypress.Commands.add('deletarProdutoToken', (data) => {
  cy.getToken('admin@gmail.com', '123').then((token) => {
    return cy.request({
      method: 'POST',
      url: 'https://serverest.dev/produtos',
      body: data,failOnStatusCode: false
    }).then((response) => {
      const userId  = response.body._id
      cy.request({
        method: 'DELETE',
        url: 'https://serverest.dev/produtos/' + userId, 
        failOnStatusCode: false
      })
    })
  })
})

//deletar produto rota exclusiva
Cypress.Commands.add('deletarProdutoUsuario', (data) => {
  cy.getToken('vagnerosales@gmail.com', '123').then((token) => {
    return cy.request({
      method: 'POST',
      url: 'https://serverest.dev/produtos',
      headers: {
        "Authorization": token,
        "Content-Type": "application/json"
      },
      body: data,failOnStatusCode: false
    }).then((response) => {
      const userId  = response.body._id
      cy.request({
        method: 'DELETE',
        url: 'https://serverest.dev/produtos/' + userId,
        headers: {
          "Authorization": token,
          "Content-Type": "application/json"
        },failOnStatusCode: false
      })
    })
  })
})

  //editar produto
Cypress.Commands.add('editarProduto', (data) => {
  cy.getToken('admin@gmail.com', '123').then((token) => {
    return cy.request({
      method: 'POST',
      url: 'https://serverest.dev/produtos',
      headers: {
        "Authorization": token,
        "Content-Type": "application/json"
      },
      body: data
    }).then((response) => {
      const userId  = response.body._id
      cy.request({
        method: 'PUT',
        url: 'https://serverest.dev/produtos/' + userId,
        headers: {
          "Authorization": token,
          "Content-Type": "application/json"
        },
        body: {
          nome: Math.random().toString(36).substring(2,10) + 'teste gremio',
          preco: 100,
          descricao: 'Descrição do produto teste',
          quantidade: 10
        },failOnStatusCode: false
      })
    })
  })
})
  //editar produto existente
Cypress.Commands.add('editar', (data) => {
  cy.getToken('admin@gmail.com', '123').then((token) => {
    return cy.request({
      method: 'POST',
      url: 'https://serverest.dev/produtos',
      headers: {
        "Authorization": token,
        "Content-Type": "application/json"
      },
      body: data
    }).then((response) => {
      const userId  = response.body._id
      cy.request({
        method: 'PUT',
        url: 'https://serverest.dev/produtos/' + userId,
        headers: {
          "Authorization": token,
          "Content-Type": "application/json"
        },
        body: {
          nome:'teste gremio',
          preco: 100,
          descricao: 'Descrição do produto teste',
          quantidade: 10
        },failOnStatusCode: false
      })
    })
  })
})

  //token expirado
  Cypress.Commands.add('editartokenAusente', (data) => {
    cy.getToken('admin@gmail.com', '123').then((token) => {
      return cy.request({
        method: 'POST',
        url: 'https://serverest.dev/produtos',
        body: data,failOnStatusCode: false
      }).then((response) => {
        const userId  = response.body._id
        cy.request({
          method: 'PUT',
          url: 'https://serverest.dev/produtos/' + userId,
          body: {
            nome: Math.random().toString(36).substring(2,10) + 'teste gremio',
            preco: 100,
            descricao: 'Descrição do produto teste',
            quantidade: 10
          },failOnStatusCode: false
        })
      })
    })
  })

  //editar produto Usuario
  Cypress.Commands.add('editarProdutoUsuario', (data) => {
    cy.getToken('vagnerosales@gmail.com', '123').then((token) => {
      return cy.request({
        method: 'POST',
        url: 'https://serverest.dev/produtos',
        headers: {
          "Authorization": token,
          "Content-Type": "application/json"
        },
        body: data,failOnStatusCode: false
      }).then((response) => {
        const userId  = response.body._id
        cy.request({
          method: 'PUT',
          url: 'https://serverest.dev/produtos/' + userId,
          headers: {
            "Authorization": token,
            "Content-Type": "application/json"
          },
          body: {
            nome: Math.random().toString(36).substring(2,10) + 'teste gremio',
            preco: 100,
            descricao: 'Descrição do produto teste',
            quantidade: 10
          },failOnStatusCode: false
        })
      })
    })
  })

  // Cadastrar carrinho admin
Cypress.Commands.add('postProdutocarrinho', (data) => {
  cy.getToken('admin@gmail.com', '123').then((token) => {
    return cy.request({
      method: 'POST',
      url: 'https://serverest.dev/carrinhos',
      headers: {
        "Authorization": token,
        "Content-Type": "application/json"
      },
      body:{
        "produtos": [
          {
            "idProduto": "BeeJh5lz3k6kSIzA12",
            "quantidade": 1
          },
          {
            "idProduto": "YaeJ455lz3k6kSIzA12",
            "quantidade": 3
          }
        ]
      },failOnStatusCode: false
    })
    }).then((response) => {
      const userId  = response.body._id
    })
  })


 // Cadastrar carrinho admin
 Cypress.Commands.add('carrinhoCadastrado', (data) => {
  cy.getToken('admin@gmail.com', '123').then((token) => {
    return cy.request({
      method: 'POST',
      url: 'https://serverest.dev/carrinhos',
      headers: {
        "Authorization": token,
        "Content-Type": "application/json"
      },
      body:{
        "produtos": [
          {
            "idProduto": "0EBgecRawiDf8svK", //40coLZY7zlhJevkc
            "quantidade": 1
          },
        ]
      },failOnStatusCode: false
    })
    }).then((response) => {
      const userId  = response.body._id
    })
  })

  // concluir produto carrinho
Cypress.Commands.add('concluirProdutocarrinho', (data) => {
  cy.getToken('admin@gmail.com', '123').then((token) => {
    return cy.request({
      method: 'DELETE',
      url: 'https://serverest.dev/carrinhos/concluir-compra',
      headers: {
        "Authorization": token,
        "Content-Type": "application/json"
      },
    })
    }).then((response) => {
      const userId  = response.body._id
    })
  })

    // cancelar produto carrinho
Cypress.Commands.add('cancelarProdutocarrinho', (data) => {
  cy.getToken('admin@gmail.com', '123').then((token) => {
    return cy.request({
      method: 'DELETE',
      url: 'https://serverest.dev/carrinhos/cancelar-compra',
      headers: {
        "Authorization": token,
        "Content-Type": "application/json"
      },
    })
    }).then((response) => {
      const userId  = response.body._id
    })
  })



  //Cadastrar produto, carrinho e deletar
  Cypress.Commands.add('postProdutoDiretoCarrinho', (data) => {
    cy.getToken('admin@gmail.com', '123').then((token) => {
      return cy.request({
        method: 'POST',
        url: 'https://serverest.dev/produtos',
        headers: {
          "Authorization": token,
          "Content-Type": "application/json"
        },
        body: data,
      }).then((response) => {
        const userId  = response.body._id

    cy.request({
        method: 'POST',
        url: 'https://serverest.dev/carrinhos',
        headers: {
          "Authorization": token,
          "Content-Type": "application/json"
        },
        body:{
          "produtos": [
            {
              "idProduto": userId,
              "quantidade": 1
            },
          ]
        },failOnStatusCode: false
      })
      }).then((response) => {
        const userId  = response.body._id
      })
    })
  })