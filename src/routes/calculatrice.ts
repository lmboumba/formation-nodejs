import fastify from 'fastify'
export default async function calculatriceRoute(app: 'FastifyInstance') {
  app.get('/calculatrice', async () => {
    return { ... }
  })
}
}

export type CalcRoute = {
    Params: {
      x: string,
      y: string,
    }
  }
  app.get< CalcRoute> ('/Calc/add/:x/:y', request => {
    const x = parseFloat(request.params.x)
    const y = parseFloat(request.params.y)
    return {
    result: x + y,
    x: x,
    y: y,
    operation: 'add',
  }
  
  
  app.get< CalcRoute> ('/Calc/sub/:x/:y', request => {
    const x = parseFloat(request.params.x)
    const y = parseFloat(request.params.y)
    return {
    result: x - y,
    x: x,
    y: y,
    operation: 'sub',
  }
  
  app.get< CalcRoute> ('/Calc/mul/:x/:y', request => {
    const x = parseFloat(request.params.x)
    const y = parseFloat(request.params.y)
    return {
    result: x * y,
    x: x,
    y: y,
    operation: 'mul',
  }
  
  app.get< CalcRoute> ('/Calc/div/:x/:y', request => {
    const x = parseFloat(request.params.x)
    const y = parseFloat(request.params.y)
    return {
    result: x / y,
    x: x,
    y: y,
    operation: 'div',
  }