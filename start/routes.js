'use strict'

const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})

require('./routes/api-v1');
require('./routes/manage');
