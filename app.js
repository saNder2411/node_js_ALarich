const { characters, stealRing } = require('./characters')

const updateCharacters = stealRing(characters, characters[0].name)

updateCharacters.forEach((c) => console.log(c))
