const fs = require('fs');
const colors = require('colors');

const crearArchivo = (multiplicador = 5) => {
    return new Promise((resolve, reject) => {
        let salida = '';

        const getTablaMultiplicacion = (multiplicador) => {
            for (let multiplicando = 1; multiplicando <= 10; multiplicando++) {
                console.log(`${multiplicador} x ${multiplicando} = ${multiplicador * multiplicando}`);
                salida += `${multiplicador} x ${multiplicando} = ${multiplicador * multiplicando}`;
                salida += (multiplicando === 10) ? '' : '\n';
            }
        }

        console.log(`=====================`);
        console.log(`     tabla del ${multiplicador}  `);
        console.log(`=====================`);
        getTablaMultiplicacion(multiplicador);

        try {
            fs.writeFileSync(`table-${multiplicador}.txt`, salida);
            resolve(`Tabla-${multiplicador}.txt`);
        }
        catch (err) {
            reject(err);
        }
    });
}

const crearArchivoAsync = async (multiplicador = 5, listar = false, h = 10) => {
    let salida = '';

    const getTablaMultiplicacion = (multiplicador) => {
        for (let multiplicando = 1; multiplicando <= h; multiplicando++) {
            console.log(`${multiplicador.toString().brightBlue} ${'x'.green} ${multiplicando.toString().yellow} ${'='.brightBlue} ${(multiplicador * multiplicando).toString().brightRed}`);
            salida += `${multiplicador} x ${multiplicando} = ${multiplicador * multiplicando}`;
            salida += (multiplicando === h) ? '' : '\n';
        }
    }

    try {
        if (h > 0) {
            if (listar) {
                console.log(`=====================`.cyan);
                console.log(`     tabla del ${multiplicador.toString().red}  `.green);
                console.log(`=====================`.cyan);

                getTablaMultiplicacion(multiplicador);
            }

            fs.writeFileSync(`./salida/table-${multiplicador}.txt`, salida);
            return `Tabla-${multiplicador}.txt`;
        } else {
            throw 'El valor "hasta" debe se mayor a cero.'.red;
        }
    }
    catch (err) {
        throw err;
    }

}

module.exports = {
    crearArchivo,
    crearArchivoAsync
}