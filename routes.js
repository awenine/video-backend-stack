/**
 * Encapsulates the routes
 * @param {FastifyInstance} fastify Encapsulated fastify instance
 * @param {Object} options plugin options 
 */
async function routes(fastify, options) {
  fastify.get('/', async (request, reply) => {
    return { hello: 'world' }
  })
}

module.exports = routes