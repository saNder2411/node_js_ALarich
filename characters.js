const characters = [
  { name: 'Frodo', hasRing: false },
  { name: 'Bilbo', hasRing: false },
]

const stealRing = (characters, owner) => characters.map((c) => ({ ...c, hasRing: c.name === owner }))

module.exports = { characters, stealRing }
