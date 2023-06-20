import { Gachamon } from "./models/Gachamon.js"
import { Value } from "./models/Value.js"
import { EventEmitter } from "./utils/EventEmitter.js"
import { isValidProp } from "./utils/isValidProp.js"
import { loadState } from "./utils/Store.js"

class ObservableAppState extends EventEmitter {

  page = ''

  /** @type {import('./models/Value.js').Value[]} */
  values = loadState('values', [Value])

  // NOTE can still set primitives in AppState, not everything will be a class model
  coins = 0

  // NOTE The line below provides intellisense, not necessary but still worth doing
  /** @type {import('./models/Gachamon.js').Gachamon[]} */
  gachamons = [
    new Gachamon({ name: 'Mikey', emoji: '🐒', rarity: 'ultra-rare' }),
    new Gachamon({ name: 'Lil Jeremy', emoji: '🦞', rarity: 'common' }),
    new Gachamon({ name: 'Rodney', emoji: '🐍', rarity: 'rare' }),
    new Gachamon({ name: 'Oslo', emoji: '🦧', rarity: 'common' }),
  ]

  /** @type {import('./models/Gachamon.js').Gachamon[]} */
  // NOTE no longer need an empty array on initialization, we are now using loadState below
  // myGachamons = []

  myGachamons = loadState('myGachamons', [Gachamon])

  /** @type {import('./models/Gachamon.js').Gachamon | null} */
  // NOTE activeGachamon is null because it does not have a value when the AppState is initialized, but we can set it to Gachamon later
  activeGachamon = null

  // NOTE Used to load initial data
  init() {

  }

}

export const AppState = new Proxy(new ObservableAppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
