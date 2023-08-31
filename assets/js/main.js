

const offset = 0
const limit = 11
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

fetch(url) // Promessa de Resposta (Em algum momento receberá) / tem um encadeamento também
    .then((response) => response.json())
    .then((jsonBody) => console.log(jsonBody))
    .catch((error) => console.error(error))
    .finally(() => console.log('Requisição concluída'))
