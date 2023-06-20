import { AppState } from "../AppState.js"

class CoinsService {
  addCoin() {
    // REVIEW primitive vs reference types in js
    // let coins = AppState.coins
    // coins++

    AppState.coins++

    console.log('Did the coins go up?', AppState.coins);
  }

}

export const coinsService = new CoinsService()