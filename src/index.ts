console.log('bonjour');
console.log(process.env.NODE_ENV);
console.log(process.env.TZ);
console.log(process.env.HOST);
console.log(process.env.PORT);

import fastify from "fastify";
import fastifyPlugin from "fastify-plugin";

const app = fastify ()
app.get('/', () => {
    return 'Bienvenue sur mon serveur'
})

app.get('/hello', () => {
    return 'Bonjour tout le monde'
  })

  app.get('/eleves', (request, response) => {
    response.header('Developed-With', 'fastify')
    return[
      {id:1, nom: 'john', prenom: 'john', age: 32},
      {id:2, nom: 'rose', prenom: 'john', age: 36},
      {id:3, nom: 'jane', prenom: 'john', age: 40},
      {id:4, nom: 'jean', prenom: 'john', age: 38},
    ]  
  })


app.register(fastifyPlugin(calculatriceRoute))




app.listen({port:4646, host:'127.0.0.1'}, () =>{
  console.log('http//127.0.0.1/4646')
})
