const publicKey = '12633c36a412a8971aad39278d889875'
const hash = '0397a27c431b200ed7cf62b34df4ff1d'
const ts = 1
export const URL_EXTENSION = `?ts=${ts}&apikey=${publicKey}&hash=${hash}`

// https://gateway.marvel.com:443/v1/public/characters?apikey=12633c36a412a8971aad39278d889875
export const URL_MARVEL_CHARACTERS = `https://gateway.marvel.com/v1/public/characters${URL_EXTENSION}`
export const URL_MARVEL_CHARACTERS_BY_ID = 'https://gateway.marvel.com:443/v1/public/characters/'

export function extractObjectFromArray (array) {
  const [object] = array
  return object
}
