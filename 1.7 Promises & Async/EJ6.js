const promesa1 = new Promise((resolve) => {
    setTimeout(() => {
        resolve('Promesa 1 resuelta después de 2 segundos');
    }, 2000);
});

const promesa2 = new Promise((resolve) => {
    setTimeout(() => {
        resolve('Promesa 2 resuelta después de 3 segundos');
    }, 3000);
});

Promise.all([promesa1, promesa2])
    .then((resultados) => {
        console.log(resultados);
    })
    .catch((error) => {
        console.error('Error en alguna de las promesas:', error);
    });