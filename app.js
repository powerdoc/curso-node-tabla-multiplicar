const { crearArchivoAsync } = require('./helpers/multiplicar');
const argv = require('./config/yargs');
const colors = require('colors');

console.clear();

crearArchivoAsync(argv.b, argv.l, argv.h)
    .then(nombreArchivo => console.log(nombreArchivo.toString().rainbow, 'creado usando promesas js and async'.green))
    .catch(err => console.log('Error:'.rainbow + err));
