const http = require('node:http')
const { findAvailablePort } = require('./13.free-port')

const server = http.createServer((req, res) => {
  console.log('Request received')
  res.end('Hola mundo')
})

findAvailablePort(3000).then(port => {
  server.listen(port, () => {
    console.log(`Server listening on port http://localhost:${port}`)
  })
})
