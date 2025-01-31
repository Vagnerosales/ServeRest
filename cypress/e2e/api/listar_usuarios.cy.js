
it('Usuários', () => {
  cy.request({
    method: 'GET',
    url: `https://serverest.dev/usuarios`,
        //headers: { Authorization: accessToken },
      }).then ((response)=>{
        expect(response.status).equal(200);
    })
  })
