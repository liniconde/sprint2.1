function verificarInput(input) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (input === 'Hola') {
                resolve('El input es correcto');
            } else {
                reject('El input es incorrecto');
            }
        }, 2000); 
    });
}

async function ejecutarVerificacion() {
    try {
        const resultado = await verificarInput('Hola'); 
        console.log(resultado);
    } catch (error) {
        console.error(error);
    }
}

ejecutarVerificacion();