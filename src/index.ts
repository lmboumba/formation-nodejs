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

app.listen({port:4646, host:'127.0.0.1'}, () =>{
  console.log('http//127.0.0.1/4646')
})