const fastify = require('fastify')({logger:true})

fastify.get('/', (req, res) => {
  res.send({hello: 'world'})
})

fastify.route({
  method: 'GET',
  url:'/test',
  schema: {
    // this is a parameter in the address, ie '?name=anyName'
    querystring: {
      type: 'object',
      properties: {
        name: {type: 'string'}
      },
      required: ['name']
    },
    response: {
      200: {
        type: 'object',
        properties: {
          hello: {type: 'string'}
        }
      } 
    }
  },
  preHandler: (req, res, done) => {
    // logic here, runs before handler on every request
    done()
  },
  handler: (request, reply) => {
    console.log(request)
    reply.send({hello: request.query.name})
  }
})


fastify.listen({port: 3000}, (err) => {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
})