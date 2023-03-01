console.log('bonjour');
console.log(process.env.NODE_ENV);
console.log(process.env.TZ);
console.log(process.env.HOST);
console.log(process.env.PORT);

import fastify from "fastify";

const app = fastify ()
app.get('/', () => {
    return 'Bienvenue sur mon serveur'
})

app.get('/hello', () => {
    return 'Bonjour tout le monde'
  })

  app.get('/eleves', (resquest, response) => {
    return[
      {id:1, nom: 'John', prenom: 'John', age: 32},
      {id:2, nom: 'rose', prenom: 'John', age: 36},
      {id:3, nom: 'Jane', prenom: 'John', age: 40},
      {id:4, nom: 'Jean', prenom: 'John', age: 38},
    ]  
  })


app.listen({port:4646, host:'127.0.0.1'}, () =>{
  console.log('http//127.0.0.1/4646')
})