
const request = require('supertest'); //requisicoes de API
const {expected, expect} = require('chai');

describe ('Login',() => {    describe ('POST/login',() => {
        it('Deve retornar 200 com o token em string com credencias validas', async () => {
           const resposta = await request ('http://localhost:3000')
              .post('users/login')
              .set('Content-Type', 'application/json')
                .send({
                    'username': 'julio',
                    'senha': '123456'
                });

                console.log(resposta.status);
                console.log(resposta.body.token);

                expect(resposta.status).to.equal(200);
                //expect(respostatoken).to.be.a('string');

        });

    });

});
