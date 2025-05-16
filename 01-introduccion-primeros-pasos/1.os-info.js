const os = require('node:os')

console.log('Informacion del sistema operativo:')
console.log('----------------------------------')

console.log('nombre del si stema operativi', os.platform())
console.log('nombre del si stema operativi', os.cpus())
console.log('Uptime', os.uptime() / 60 / 60)
