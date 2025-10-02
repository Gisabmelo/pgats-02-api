
const request = require('supertest'); //requisicoes de API
const {expected, expect} = require('chai');

describe ('Login',() => {    
    it ('Deve retornar 400 com credencias invalidas', async () => {
    describe ('POST/users/login',() => {
       before(async () => {
             const postLogin = require('../fixture/requisicoes/login/postLogin.json');
           
                       const respostaLogin = await request(process.env.BASE_URL_REST)
                           .post('/users/login')
                           .send({
                            "username": "julio",
                            "senha": "12345"

                           });
           
                       token = respostaLogin.body.token;
                       expect(respostaLogin.status).to.equal(400);
                   });

        });

    });

});
