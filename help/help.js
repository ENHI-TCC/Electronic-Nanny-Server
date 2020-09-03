/**
 * Métodos HTTP:
 *
 * GET: Buscar uma informação
 * POST: Criar uma informação
 * PUT: Alterar uma informação
 * DELETE: Deletar uma informação
 *
 */


/**
 * Tipos de parâmetros
 *
 * Query: ?name=Luis&idade=22 > parâmetros nomeados enviados na rota/url
 *        request.query
 * Route: /users/:id > utilizados para identificar recursos diretamente na rota
 *        request.params
 * Body:  json > Corpo da requisição, utilizado para criar ou alterar recursos
 *        request.body
 */

/**
 * Tipos de uso no SQL (SQLite)
 *
 * Driver: SELECT * FROM users
 *
 * Query Builder: table('users').select('*').where()
 *                KNEX.JS
 *
 */