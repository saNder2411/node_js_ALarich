// import { characters, great } from './characters.mjs'

async function main() {
  try {
    const { characters, great } = await import('./characters.mjs')
    characters.forEach((c) => great(c))

  } catch (e) {
    console.log('Error')
  }
}

main()

