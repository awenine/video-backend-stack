import fastify = require("fastify");

const server = fastify()

server.get('/ping', async (request, reply) => {
  return 'pong\n'
})

server.listen({port: 8081}, (err, address) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  console.log(`server listening at ${address}`);
})