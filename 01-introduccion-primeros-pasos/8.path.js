const path = require('node:path')

console.log(path.sep)

// UNIR RUTAS CON PATH
const filePath = path.join('.', 'content', 'subfolder', 'test.txt')
console.log(filePath)

const base = path.basename('/tmp/lausdf/password.txt')
console.log(base)
