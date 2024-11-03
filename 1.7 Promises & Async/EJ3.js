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


verificarInput('Hola')
    .then(mensaje => console.log(mensaje))   
    .catch(error => console.error(error));
      
